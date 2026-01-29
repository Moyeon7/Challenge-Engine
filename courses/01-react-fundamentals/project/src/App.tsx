import './App.css'
import ChallengeList from './components/ChallengeList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Fundamentals Project</h1>
        <p>Complete the challenges to build your React skills!</p>
        <p className="subtitle">
          Work on challenges by modifying code in <code>src/</code> directory.
          Run <code>npm run dev</code> to see your changes.
        </p>
      </header>
      <main>
        <ChallengeList />
      </main>
    </div>
  )
}

export default App
