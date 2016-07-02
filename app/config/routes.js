import React from 'react'
import {hashHistory, Router, Route, IndexRoute} from 'react-router'

import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'
import AddQuoteContainer from '../containers/AddQuoteContainer'

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='add-quote' component={AddQuoteContainer} />
    </Route>
  </Router>
)

export default routes
