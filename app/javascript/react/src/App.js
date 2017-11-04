import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import IndexContainer from './containers/IndexContainer'
import CoffeeFormContainer from './containers/CoffeeFormContainer'
import NewFormula from './containers/NewFormula'
import SavedFormulasContainer from './containers/SavedFormulasContainer'
import FormulaShowPage from './components/FormulaShowPage'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={IndexContainer} />
          <Route path='/new' component={CoffeeFormContainer} />
          <Route path='/new' component={NewFormula} />
          <Route path='/formulas' component={SavedFormulasContainer} />
          <Route path='/formula' component={FormulaShowPage} />
      </Route>
    </Router>
  )
}

export default App
