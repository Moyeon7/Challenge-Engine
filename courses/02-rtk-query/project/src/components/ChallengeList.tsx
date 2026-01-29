import './ChallengeList.css';
import { Link } from 'react-router-dom';

/**
 * Challenge List Component for RTK Query Course
 */
export default function ChallengeList() {
  const challenges = [
    {
      id: '01-api-setup',
      name: 'API Setup and Basic Fetching',
      difficulty: 'Beginner',
      description: 'Set up RTK Query API and create your first data fetching endpoint',
      route: '/challenge/01-api-setup'
    },
    {
      id: '02-data-display',
      name: 'Data Display and Caching',
      difficulty: 'Intermediate',
      description: 'Implement data caching, refetching, and display multiple data sources',
      route: '/challenge/02-data-display'
    },
    {
      id: '03-mutations',
      name: 'Mutations and Optimistic Updates',
      difficulty: 'Advanced',
      description: 'Add mutations with optimistic updates for better UX',
      route: '/challenge/03-mutations'
    }
  ];

  return (
    <div className="challenge-list">
      <h2>RTK Query Challenges</h2>
      <p>Complete these challenges to master RTK Query!</p>
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
              <Link 
                to={challenge.route}
                className="btn btn-primary"
              >
                View Challenge UI
              </Link>
              <a 
                href={`./challenges/${challenge.id}/README.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginLeft: '0.5rem' }}
              >
                Read Instructions
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
