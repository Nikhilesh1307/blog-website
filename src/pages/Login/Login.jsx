import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login({ onLogin }) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const registeredUser = JSON.parse(
      localStorage.getItem('registeredUser')
    )

    if (!registeredUser) {
      setError('No registered user found. Please register first.')
      return
    }

    const isValidUser =
      registeredUser.email === email &&
      registeredUser.password === password

    if (!isValidUser) {
      setError('Email or password is incorrect.')
      return
    }

    setError('')
    onLogin()
    navigate('/', { replace: true })
  }

  return (
    <div className="login-page">
      <form
        className="login-form d-flex flex-column row-gap-2 justify-content-center"
        onSubmit={handleSubmit}
      >
        <h1>Please Login</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="loginEmail">Email Address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <label htmlFor="loginPassword">Password</label>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-success w-100">
          Login
        </button>

        <p>
          Do not have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login