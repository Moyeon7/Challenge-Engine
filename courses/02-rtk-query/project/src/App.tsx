import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ChallengeList from './components/ChallengeList'
import UsersList from './components/UsersList'
import PostsList from './components/PostsList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>RTK Query Dashboard</h1>
          <p>Complete the challenges to build your data-driven dashboard!</p>
          <nav style={{ marginTop: '1rem' }}>
            <Link to="/" style={{ margin: '0 1rem', color: 'inherit' }}>Home</Link>
            <Link to="/challenge/01-api-setup" style={{ margin: '0 1rem', color: 'inherit' }}>Challenge 1</Link>
            <Link to="/challenge/02-data-display" style={{ margin: '0 1rem', color: 'inherit' }}>Challenge 2</Link>
            <Link to="/challenge/03-mutations" style={{ margin: '0 1rem', color: 'inherit' }}>Challenge 3</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ChallengeList />} />
            <Route path="/challenge/01-api-setup" element={
              <div style={{ padding: '2rem' }}>
                <h2>Challenge 01: API Setup and Basic Fetching</h2>
                <UsersList />
              </div>
            } />
            <Route path="/challenge/02-data-display" element={
              <div style={{ padding: '2rem' }}>
                <h2>Challenge 02: Data Display and Caching</h2>
                <PostsList />
              </div>
            } />
            <Route path="/challenge/03-mutations" element={
              <div style={{ padding: '2rem' }}>
                <h2>Challenge 03: Mutations and Optimistic Updates</h2>
                <p>This challenge will involve mutations. Implement according to the challenge instructions.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
