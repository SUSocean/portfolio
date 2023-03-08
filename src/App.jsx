import React from 'react'

import { ContextProvider } from './context/Context'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'


function App() {
  return (
    <ContextProvider>
      <Navigation />
      <Welcome />
    </ContextProvider>
  )
}

export default App