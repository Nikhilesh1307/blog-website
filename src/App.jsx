import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CategoryBlogs from './pages/CategoryBlogs/CategoryBlogs'
import DedicatedBlog from './pages/DedicatedBlog/DedicatedBlog'

import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  )

  function handleLogin() {
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true)
  }

  function handleLogout() {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <>
      {isLoggedIn && <NavBar onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Registration />
            )
          }
        />

        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/blogs/:category"
          element={
            isLoggedIn ? (
              <CategoryBlogs />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/blog/:id"
          element={
            isLoggedIn ? (
              <DedicatedBlog />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="*"
          element={
            <Navigate to={isLoggedIn ? '/' : '/login'} replace />
          }
        />
      </Routes>

      {isLoggedIn && <Footer />}
    </>
  )
}

export default App