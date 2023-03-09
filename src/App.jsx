import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ContextProvider } from './context/Context'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'


function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Navigation />}>
            {/* <div className='startScreen-container'>
              <Navigation />
              <Welcome />
            </div> */}
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App

// !!!! need to combaine all nav into one componenet for route and set link and finish the design alrady!