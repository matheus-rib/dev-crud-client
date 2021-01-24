import React from 'react'
import GlobalStyle from '@/styles/globals'
import Routes from '@/routes'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import alertOptions from '@/lib/alertOptions'

function App(): JSX.Element {
  return (
    <div className="App">
      <AlertProvider
        template={AlertTemplate}
        position={alertOptions.position}
        timeout={alertOptions.timeout}
        offset={alertOptions.offset}
        transition={alertOptions.transition}
      >
        <Routes />
        <GlobalStyle />
      </AlertProvider>
    </div>
  )
}

export default App
