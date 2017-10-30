import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import IndexContainer from './containers/IndexContainer'
import TimerContainer from './containers/TimerContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={IndexContainer} />
      </Route>
    </Router>
  )
}

export default App
