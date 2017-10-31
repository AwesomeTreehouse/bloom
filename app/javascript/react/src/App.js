import React from 'react';
import { Router, browserHistory, Route } from 'react-router';
import IndexContainer from './containers/IndexContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={IndexContainer}>
      </Route>
    </Router>
  )
}

export default App
