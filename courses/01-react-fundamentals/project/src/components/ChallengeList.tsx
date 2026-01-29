import './ChallengeList.css';

/**
 * Challenge List Component
 * 
 * Displays available challenges for the course.
 * This helps learners navigate to challenge instructions.
 */
export default function ChallengeList() {
  const challenges = [
    {
      id: '01-user-profile',
      name: 'User Profile Component',
      difficulty: 'Beginner',
      description: 'Build a user profile component with follow button'
    },
    {
      id: '02-todo-list',
      name: 'Todo List Application',
      difficulty: 'Intermediate',
      description: 'Create a functional todo list with add, complete, and delete'
    },
    {
      id: '03-state-management',
      name: 'State Management with Context',
      difficulty: 'Advanced',
      description: 'Implement theme switching using React Context API'
    }
  ];

  return (
    <div className="challenge-list">
      <h2>Available Challenges</h2>
      <p>Complete these challenges to build your React skills!</p>
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
      <div className="instructions">
        <h3>How to Get Started</h3>
        <ol>
          <li>Read the challenge README in <code>challenges/01-xxx/README.md</code></li>
          <li>Modify code in <code>src/</code> to implement the feature</li>
          <li>Run <code>npm run dev</code> to see your changes</li>
          <li>Verify visually in the browser</li>
          <li>Run <code>npm run review</code> to get scored</li>
        </ol>
      </div>
    </div>
  );
}
