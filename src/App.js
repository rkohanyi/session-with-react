import { useState } from "react"
import Login from "./components/Login"
import Logout from "./components/Logout"
import LoginNeeded from "./components/LoginNeeded"
import NoLoginNeeded from "./components/NoLoginNeeded"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  function handleLogin(error) {
    if (error) {
      console.error('Failed to login', error)
    } else {
      console.log('Successful login')
      setLoggedIn(true)
    }
  }

  function handleLogout(error) {
    if (error) {
      console.error('Failed to logout', error)
    } else {
      console.log('Successful logout')
      setLoggedIn(false)
    }
  }

  if (loggedIn) {
    return <>
      <NoLoginNeeded />
      <LoginNeeded />
      <Logout onLogout={handleLogout} />
    </>
  } else {
    return <>
      <NoLoginNeeded />
      <Login onLogin={handleLogin} />
    </>
  }
}

export default App
