import React from 'react'
import { ContextProvider } from './components/Context'
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

function App() {

  return (
    <>
      <ContextProvider>
        <div id='HOME' className='startScreen-container'>
          <Home />
        </div>
        <main>
          <About />
          <Work />
        </main>
      </ContextProvider>
    </>
  )
}

export default App
