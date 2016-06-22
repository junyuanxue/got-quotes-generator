import React from 'react'
import {hashHistory, Router, Route} from 'react-router'

import Main from '../containers/Main'

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>
)

export default routes
