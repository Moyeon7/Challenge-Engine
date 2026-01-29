import './App.css'
import ChallengeList from './components/ChallengeList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RTK Query Dashboard</h1>
        <p>Complete the challenges to build your data-driven dashboard!</p>
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
