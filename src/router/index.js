import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
]

export default () => (
  <Fragment>
    {routes.map((route, i) => <Route key={i} {...route} />)}
  </Fragment>
)
