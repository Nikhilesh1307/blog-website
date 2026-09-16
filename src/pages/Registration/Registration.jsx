import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Registration.css'

function Registration() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const existingUser = localStorage.getItem('registeredUser')

    if (existingUser) {
      setError('A user is already registered. Please login.')
      return
    }

    const user = {
      name,
      phone,
      email,
      password,
    }

    localStorage.setItem('registeredUser', JSON.stringify(user))

    navigate('/login', { replace: true })
  }

  return (
    <div className="login-page">
      <form
        className="login-form d-flex flex-column row-gap-2 justify-content-center"
        onSubmit={handleSubmit}
      >
        <h1>Please Register</h1>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="registerName"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="registerName">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="registerPhone"
            placeholder="+91-00000 00000"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
          <label htmlFor="registerPhone">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="registerEmail">Email Address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="registerPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <label htmlFor="registerPassword">Password</label>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-success w-100">
          Register
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Registration