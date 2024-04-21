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
     <Navbar/>
    <HomePage/>

 { /* <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage />} />
    </Routes> */}
    </> 
  )
}

export default App;


