import React from 'react'

import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

function App() {

  return (
    <>
      <div id='HOME' className='startScreen-container'>
        <Home />
      </div>
      <main>
        <About />
        <Work />
      </main>
    </>
  )
}

export default App
