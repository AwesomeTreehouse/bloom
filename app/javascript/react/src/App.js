import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import IndexContainer from './containers/IndexContainer'
import CoffeeFormContainer from './containers/CoffeeFormContainer'
import NewFormula from './containers/NewFormula'
import SavedFormulasContainer from './containers/SavedFormulasContainer'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={IndexContainer} />
          <Route path='/form' component={CoffeeFormContainer} />
          <Route path='/form' component={NewFormula} />
          <Route path='formulas' component={SavedFormulasContainer} />
      </Route>
    </Router>
  )
}

export default App
