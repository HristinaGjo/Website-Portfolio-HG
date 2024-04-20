import React from 'react'
/*import ReactDOM from 'react-dom/client' */
import { render } from "react-dom"; 

import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <Router> 
    <App />   
    </Router>
  </React.StrictMode>,
  container
);
