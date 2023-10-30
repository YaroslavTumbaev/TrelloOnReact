import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router.jsx'
import Navigation from './components/Navigation/Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navigation />
      <Router />
    </React.StrictMode>
  </BrowserRouter>
)
