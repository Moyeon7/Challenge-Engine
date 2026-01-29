import { Provider } from 'react-redux'
import { store } from './store/store'
import UsersList from './components/UsersList'

function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  )
}

export default App
