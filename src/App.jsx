import React from 'react'

import Navigation from './components/Navigation'
import Welcome from "./components//Welcome";


function App() {
  return (
    <>
      <div id='HOME' className='startScreen-container'>
        <Navigation />
        <Welcome />
      </div>
      <div className='whitespace'></div>
    </>
  )
}

export default App
