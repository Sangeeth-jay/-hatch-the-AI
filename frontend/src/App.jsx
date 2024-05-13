import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import './App.css'
import Intro from './pages/Intro'
import Login from './pages/LogIn'

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Routers>

    </>
  )
}

export default App
