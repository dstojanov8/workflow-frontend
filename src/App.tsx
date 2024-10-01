import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
// import LoginForm from './login-form/LoginForm'

function App() {

  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/1">User 1</Link>
      </nav>
      <hr /> */}
      <Navbar />
      <Outlet /> {/* Renders the matched child route */}
    </div>
    // <>
    // <LoginForm />
    // </>
  )
}

export default App
