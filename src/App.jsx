import React from 'react'


import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

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
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default App
