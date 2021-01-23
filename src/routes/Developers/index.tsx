import DevelopersForm from '@/views/Developers/DevelopersForm'
import DevelopersList from '@/views/Developers/DevelopersList'
import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
const Developers: React.FC = () => {
  const { path } = useRouteMatch()
  console.log(path)

  return (
    <div>
      <Route exact path={path}>
        <DevelopersList />
      </Route>
      <Route path={`${path}new`}>
        <DevelopersForm />
      </Route>
      <Route path={`${path}edit/:developerId`}>
        <DevelopersForm />
      </Route>
    </div>
  )
}

export default Developers
