import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ChallengeList from './components/ChallengeList'
import UserProfile from './components/UserProfile'
import TodoList from './components/TodoList'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>React Fundamentals Project</h1>
            <p>Complete the challenges to build your React skills!</p>
            <nav style={{ marginTop: '1rem' }}>
              <Link to="/" style={{ margin: '0 1rem', color: 'inherit' }}>Home</Link>
              <Link to="/challenge/01-user-profile" style={{ margin: '0 1rem', color: 'inherit' }}>Challenge 1</Link>
              <Link to="/challenge/02-todo-list" style={{ margin: '0 1rem', color: 'inherit' }}>Challenge 2</Link>
              <Link to="/challenge/03-state-management" style={{ margin: '0 1rem', color: 'inherit' }}>Challenge 3</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ChallengeList />} />
              <Route path="/challenge/01-user-profile" element={
                <div style={{ padding: '2rem' }}>
                  <h2>Challenge 01: User Profile Component</h2>
                  <UserProfile name="John Doe" email="john.doe@example.com" />
                </div>
              } />
              <Route path="/challenge/02-todo-list" element={
                <div style={{ padding: '2rem' }}>
                  <h2>Challenge 02: Todo List Application</h2>
                  <TodoList />
                </div>
              } />
              <Route path="/challenge/03-state-management" element={
                <div style={{ padding: '2rem' }}>
                  <h2>Challenge 03: State Management with Context</h2>
                  <ThemeToggle />
                  <p style={{ marginTop: '1rem' }}>Toggle the theme above to see it applied throughout the app.</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
