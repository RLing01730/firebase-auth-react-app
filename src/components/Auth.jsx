import { useState } from 'react'
import PropTypes from 'prop-types'

function Auth({ onUserChange }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    if (email && password) {
      // Simulated sign in for demonstration
      // In a real app, this would use Firebase auth
      onUserChange({ email })
    }
  }

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

Auth.propTypes = {
  onUserChange: PropTypes.func.isRequired,
}

export default Auth
