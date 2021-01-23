import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Developers from './Developers'

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Developers />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Routes
