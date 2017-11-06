import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import IndexContainer from './containers/IndexContainer'
import CoffeeFormContainer from './containers/CoffeeFormContainer'
import NewFormula from './containers/NewFormula'
import SavedFormulasContainer from './containers/SavedFormulasContainer'
import FormulaShow from './components/FormulaShow'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={IndexContainer} />
          <Route path='/new' component={CoffeeFormContainer} />
          <Route path='/new' component={NewFormula} />
          <Route path='/coffee_formulas/:id' component={SavedFormulasContainer} />
          <Route component={FormulaShow} />
      </Route>
    </Router>
  )
}

export default App
