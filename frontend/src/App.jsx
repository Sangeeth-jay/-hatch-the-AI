import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import './App.css'
import Intro from './pages/Intro'
import Login from './pages/LogIn'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Routers>

    </>
  )
}

export default App
