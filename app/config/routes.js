import React from 'react'
import {hashHistory, Router, Route, IndexRoute} from 'react-router'

import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

export default routes
