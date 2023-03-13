import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './App'
import { ContextProvider } from './components/Context'
import ProjectInfo from './components/WorkComponents/ProjectInfo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider >
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/:projectId' element={<ProjectInfo />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider >
)
