import './App.css'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import { Routes, Route } from "react-router-dom"
import AnimatedCursor from "react-animated-cursor"


function App() {


  return (
    <>
  {  /*  <AnimatedCursor
      innerSize={10}
      outerSize={15}
      color='0, 0, 255got'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    /> */}
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/legal' element={<LegalPage />} />
    </Routes> 
    </>
  )
}

export default App
