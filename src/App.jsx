import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'



function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/legal' element={<LegalPage />} />
    </Routes> 
    </> 
  )
}

export default App;