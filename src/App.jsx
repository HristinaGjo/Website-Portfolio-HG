import './App.css'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/legal' element={<LegalPage />} />
    </Routes>
    </>
  )
}

export default App
