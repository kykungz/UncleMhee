import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import DemoRedux from '../demo/DemoRedux'
import DemoRouteComponent from '../demo/DemoRouteComponent'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Support from '../components/Support'
import Billing from '../components/Billing'
import Services from '../components/Services'
import Delivery from '../components/services/Delivery'
import Logistic from '../components/services/Logistic'
import POS from '../components/services/POS'
import Subscription from '../components/services/Subscription'
import Warehouse from '../components/services/Warehouse'
import Manage from '../components/Manage'

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
  {
    path: '/support',
    component: Support
  },
  {
    path: '/billing',
    component: Billing
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/manage',
    component: Manage
  },
  {
    path: '/warehouse',
    component: Warehouse
  },
  {
    path: '/logistic',
    component: Logistic
  },
  {
    path: '/subscription',
    component: Subscription
  },
  {
    path: '/pos',
    component: POS
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/redux',
    component: DemoRedux
  },
  {
    path: '/route-component/:number', // URL params
    component: DemoRouteComponent
  }
]

export default () => (
  <Fragment>
    {routes.map((route, i) => <Route key={i} {...route} />)}
  </Fragment>
)
