import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

const API = '/api';

type Progress = {
  lastUpdated: string | null;
  pathway: {
    name: string;
    overallScore: number;
    completionPercentage: number;
    badgeLevel: string;
    totalChallenges: number;
    completedChallenges: number;
  };
  courses: Record<string, CourseProgress>;
};

type CourseProgress = {
  courseId: string;
  courseName: string;
  averageScore: number;
  completionPercentage: number;
  badgeLevel: string;
  challenges: Record<string, { passed: boolean; score: number; lastRun: string | null }>;
};

type Course = {
  id: string;
  name: string;
  weight?: number;
  averageScore?: number;
  completionPercentage?: number;
  badgeLevel?: string;
};

type Challenge = {
  id: string;
  name: string;
  weight?: number;
  passed?: boolean;
  score?: number;
  lastRun?: string | null;
};

type ChallengeDetail = Challenge & {
  instructions: string;
  result: Record<string, unknown> | null;
  aiFeedback: Record<string, unknown> | null;
};

export default function App() {
  const [progress, setProgress] = useState<Progress | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesPage, setCoursesPage] = useState(1);
  const [coursesTotalPages, setCoursesTotalPages] = useState(1);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [challengesPage, setChallengesPage] = useState(1);
  const [challengesTotalPages, setChallengesTotalPages] = useState(1);
  const [detail, setDetail] = useState<ChallengeDetail | null>(null);
  const [view, setView] = useState<'courses' | 'challenges' | 'detail'>('courses');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [runningReview, setRunningReview] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    try {
      const r = await fetch(`${API}/progress`);
      const data = await r.json();
      setProgress(data);
    } catch (e) {
      setError(String(e));
    }
  }, []);

  const fetchCourses = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const r = await fetch(`${API}/courses?page=${page}&limit=20`);
      const data = await r.json();
      setCourses(data.courses || []);
      setCoursesTotalPages(data.totalPages || 1);
      setCoursesPage(page);
      setError(null);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchChallenges = useCallback(async (courseId: string, page: number) => {
    setLoading(true);
    try {
      const r = await fetch(`${API}/courses/${courseId}/challenges?page=${page}&limit=50`);
      const data = await r.json();
      setChallenges(data.challenges || []);
      setChallengesTotalPages(data.totalPages || 1);
      setChallengesPage(page);
      setError(null);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchDetail = useCallback(async (courseId: string, challengeId: string) => {
    setLoading(true);
    try {
      const r = await fetch(`${API}/courses/${courseId}/challenges/${challengeId}`);
      const data = await r.json();
      setDetail(data);
      setError(null);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  useEffect(() => {
    if (view === 'courses') fetchCourses(coursesPage);
  }, [view, coursesPage, fetchCourses]);

  useEffect(() => {
    if (view === 'challenges' && selectedCourse) fetchChallenges(selectedCourse.id, challengesPage);
  }, [view, selectedCourse, challengesPage, fetchChallenges]);

  useEffect(() => {
    if (view === 'detail' && selectedCourse && selectedChallengeId)
      fetchDetail(selectedCourse.id, selectedChallengeId);
  }, [view, selectedCourse, selectedChallengeId, fetchDetail]);

  const openChallenges = (course: Course) => {
    setSelectedCourse(course);
    setChallengesPage(1);
    setView('challenges');
  };

  const openDetail = (challengeId: string) => {
    setSelectedChallengeId(challengeId);
    setView('detail');
  };

  const runReview = async (courseId: string, challengeId: string) => {
    const key = `${courseId}/${challengeId}`;
    setRunningReview(key);
    try {
      const r = await fetch(`${API}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, challengeId }),
      });
      const data = await r.json();
      if (data.ok && data.progress) setProgress(data.progress);
      if (view === 'detail' && selectedCourse?.id === courseId && selectedChallengeId === challengeId) {
        const res = await fetch(`${API}/courses/${courseId}/challenges/${challengeId}`);
        setDetail(await res.json());
      }
      if (view === 'challenges' && selectedCourse?.id === courseId) {
        const res = await fetch(`${API}/courses/${courseId}/challenges?page=${challengesPage}&limit=50`);
        const d = await res.json();
        setChallenges(d.challenges || []);
      }
    } catch (e) {
      setError(String(e));
    } finally {
      setRunningReview(null);
    }
  };

  const pathway = progress?.pathway || {};
  const lastUpdated = progress?.lastUpdated ? new Date(progress.lastUpdated).toLocaleString() : '—';

  return (
    <div className="app">
      <header className="header">
        <h1>Challenge Engine – Progress Dashboard</h1>
        <p>View progress, instructions, and run reviews. Edit code in your editor.</p>
      </header>

      {progress && (
        <section className="progress-summary">
          <div className="progress-card">
            <strong>Pathway</strong>
            <span>{pathway.name || '—'}</span>
          </div>
          <div className="progress-card">
            <strong>Overall Score</strong>
            <span>{pathway.overallScore ?? 0}%</span>
          </div>
          <div className="progress-card">
            <strong>Completion</strong>
            <span>{pathway.completionPercentage ?? 0}%</span>
          </div>
          <div className="progress-card">
            <strong>Badge</strong>
            <span>{pathway.badgeLevel || 'none'}</span>
          </div>
          <div className="progress-card">
            <strong>Challenges</strong>
            <span>{pathway.completedChallenges ?? 0} / {pathway.totalChallenges ?? 0}</span>
          </div>
          <div className="progress-card">
            <strong>Last updated</strong>
            <span style={{ fontSize: '0.9rem' }}>{lastUpdated}</span>
          </div>
        </section>
      )}

      {error && <div className="error">{error}</div>}

      {view === 'courses' && (
        <>
          <h2>Courses</h2>
          {loading ? (
            <div className="loading">Loading courses…</div>
          ) : (
            <>
              <div className="card-list">
                {courses.map((c) => (
                  <div key={c.id} className="card">
                    <div>
                      <h3>{c.name}</h3>
                      <div className="meta">
                        Score: {c.averageScore ?? '—'}% · Completion: {c.completionPercentage ?? '—'}% · Badge: {c.badgeLevel ?? '—'}
                      </div>
                    </div>
                    <button type="button" onClick={() => openChallenges(c)}>View challenges</button>
                  </div>
                ))}
              </div>
              {coursesTotalPages > 1 && (
                <div className="pagination">
                  <button type="button" disabled={coursesPage <= 1} onClick={() => setCoursesPage((p) => p - 1)}>Previous</button>
                  <span>Page {coursesPage} of {coursesTotalPages}</span>
                  <button type="button" disabled={coursesPage >= coursesTotalPages} onClick={() => setCoursesPage((p) => p + 1)}>Next</button>
                </div>
              )}
            </>
          )}
        </>
      )}

      {view === 'challenges' && selectedCourse && (
        <>
          <div className="breadcrumb">
            <a href="#" onClick={(e) => { e.preventDefault(); setView('courses'); }}>Courses</a>
            {' / '}
            <span>{selectedCourse.name}</span>
          </div>
          <h2>Challenges – {selectedCourse.name}</h2>
          {loading ? (
            <div className="loading">Loading challenges…</div>
          ) : (
            <>
              <div className="card-list">
                {challenges.map((ch) => (
                  <div key={ch.id} className="card">
                    <div>
                      <h3>{ch.name}</h3>
                      <div className="meta">
                        <span className={`badge ${ch.passed ? 'passed' : ch.score != null ? 'failed' : 'pending'}`}>
                          {ch.passed ? 'Passed' : ch.score != null ? 'Not passed' : 'Not run'}
                        </span>
                        {ch.score != null && ` · Score: ${ch.score}%`}
                        {ch.lastRun && ` · Last run: ${new Date(ch.lastRun).toLocaleString()}`}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button type="button" onClick={() => openDetail(ch.id)}>Details</button>
                      <button
                        type="button"
                        disabled={runningReview !== null}
                        onClick={() => runReview(selectedCourse.id, ch.id)}
                      >
                        {runningReview === `${selectedCourse.id}/${ch.id}` ? 'Running…' : 'Run review'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {challengesTotalPages > 1 && (
                <div className="pagination">
                  <button type="button" disabled={challengesPage <= 1} onClick={() => setChallengesPage((p) => p - 1)}>Previous</button>
                  <span>Page {challengesPage} of {challengesTotalPages}</span>
                  <button type="button" disabled={challengesPage >= challengesTotalPages} onClick={() => setChallengesPage((p) => p + 1)}>Next</button>
                </div>
              )}
            </>
          )}
        </>
      )}

      {view === 'detail' && detail && selectedCourse && (
        <div className="detail-panel">
          <div className="back">
            <button type="button" onClick={() => setView('challenges')}>← Back to challenges</button>
          </div>
          <div className="breadcrumb">
            <a href="#" onClick={(e) => { e.preventDefault(); setView('courses'); }}>Courses</a>
            {' / '}
            <a href="#" onClick={(e) => { e.preventDefault(); setView('challenges'); }}>{selectedCourse.name}</a>
            {' / '}
            <span>{detail.name}</span>
          </div>
          <h2>{detail.name}</h2>
          <p>
            <span className={`badge ${detail.passed ? 'passed' : detail.score != null ? 'failed' : 'pending'}`}>
              {detail.passed ? 'Passed' : detail.score != null ? 'Not passed' : 'Not run'}
            </span>
            {detail.score != null && ` Score: ${detail.score}%`}
          </p>
          <p>
            <button
              type="button"
              disabled={runningReview !== null}
              onClick={() => runReview(selectedCourse.id, detail.id)}
            >
              {runningReview === `${selectedCourse.id}/${detail.id}` ? 'Running…' : 'Run review'}
            </button>
          </p>
          {detail.instructions && (
            <>
              <h3>Instructions</h3>
              <div className="instructions markdown-body">
                <ReactMarkdown>{detail.instructions}</ReactMarkdown>
              </div>
            </>
          )}
          {detail.result && (
            <>
              <h3>Last results</h3>
              <div className="results">
                <table>
                  <tbody>
                    <tr><td>Total score</td><td>{String((detail.result as Record<string, unknown>).totalScore)}%</td></tr>
                    <tr><td>Passed</td><td>{(detail.result as Record<string, unknown>).passed ? 'Yes' : 'No'}</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {detail.aiFeedback && (detail.aiFeedback as Record<string, unknown>).overall && (
            <>
              <h3>AI feedback</h3>
              <p>{(detail.aiFeedback as Record<string, unknown>).overall as string}</p>
            </>
          )}
          {detail.aiFeedback && (detail.aiFeedback as Record<string, unknown>).error && (
            <p className="meta" style={{ marginTop: '0.5rem' }}>
              AI review skipped: set GROQ_API_KEY to enable. Other layers (tests, lint, architecture, best practices, E2E) still run.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
