'use client';

import './ChallengeList.css';

/**
 * Challenge List Component for Next.js Course
 */
export default function ChallengeList() {
  const challenges = [
    {
      id: '01-server-components',
      name: 'Server Components and Basic Routing',
      difficulty: 'Beginner',
      description: 'Create your first Next.js App Router page with Server Components'
    },
    {
      id: '02-data-fetching',
      name: 'Data Fetching and API Routes',
      difficulty: 'Intermediate',
      description: 'Implement data fetching in Server Components and create API routes'
    },
    {
      id: '03-fullstack-features',
      name: 'Fullstack Features and Metadata',
      difficulty: 'Advanced',
      description: 'Implement advanced Next.js features including Client Components and metadata'
    }
  ];

  return (
    <div className="challenge-list">
      <h2>Next.js App Router Challenges</h2>
      <p>Complete these challenges to master Next.js App Router!</p>
      <div className="challenges-grid">
        {challenges.map(challenge => (
          <div key={challenge.id} className="challenge-card">
            <div className="challenge-header">
              <h3>{challenge.name}</h3>
              <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                {challenge.difficulty}
              </span>
            </div>
            <p className="challenge-description">{challenge.description}</p>
            <div className="challenge-actions">
              <a 
                href={`./challenges/${challenge.id}/README.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Challenge
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
