import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import './App.css'
import Intro from './pages/Intro'
import Login from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Routers>

    </>
  )
}

export default App
