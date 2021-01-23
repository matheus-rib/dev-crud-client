import React from 'react'
import GlobalStyle from '@/styles/globals'
import Routes from '@/routes'

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>
  )
}

export default App
