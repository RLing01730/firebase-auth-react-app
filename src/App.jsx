import { useState } from 'react'
import './App.css'
import Auth from './components/Auth'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Auth React App</h1>
        {user ? (
          <div>
            <p>Welcome, {user.email}!</p>
            <button onClick={() => setUser(null)}>Sign Out</button>
          </div>
        ) : (
          <Auth onUserChange={setUser} />
        )}
      </header>
    </div>
  )
}

export default App
