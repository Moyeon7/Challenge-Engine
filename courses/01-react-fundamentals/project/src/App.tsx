import './App.css'
import UserProfile from '../challenges/01-user-profile/UserProfile'

function App() {
  return (
    <div className="page">
      <UserProfile name="John Doe" email="john.doe@example.com" avatar="https://example.com/avatar.jpg" />
    </div>
  )
}

export default App