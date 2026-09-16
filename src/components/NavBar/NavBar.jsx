import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

function NavBar({ onLogout }) {
  const navigate = useNavigate()
  const registeredUser = JSON.parse(
    localStorage.getItem('registeredUser')
  )

  function handleLogout() {
    onLogout()
    navigate('/login', { replace: true })
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Our Blogs
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <span className="nav-link">
                Welcome, {registeredUser?.name}
              </span>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link btn btn-link"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar