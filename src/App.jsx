import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<Aboutpage />} />
  </Routes>
</div>
  )
}

export default App
