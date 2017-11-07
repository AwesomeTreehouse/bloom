import React, { Component } from 'react';
import { withRouter } from 'react-router'
import FormulaShow from '../components/FormulaShow'

class SavedFormulasContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formula: {}
      };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let formulaId = this.props.params.id
    fetch(`/api/v1/coffee_formulas/${formulaId}.json`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json())
      .then(body => {
      this.setState({
        formula: body.coffee_formula
      })
      console.log(this.state.formula.tool);
    })
  }

  handleDelete(id) {
    fetch(`/api/v1/coffee_formulas/${id}`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'delete'
    }).then(response => {
      this.props.router.push('/');
    });
  }

  render() {
    return(
      <div className="text-center">
        <FormulaShow
          date={this.state.formula.updated_at}
          beans={this.state.formula.beans}
          tool={this.state.formula.tool}
          grind={this.state.formula.grind}
          measurement={this.state.formula.measurement}
          ratio={this.state.formula.ratio}
          grounds={this.state.formula.coffee_weight}
          water={this.state.formula.water_weight}
          minutes={this.state.formula.minutes}
          seconds={this.state.formula.seconds}
        />
      </div>
    )
  }
}

export default withRouter(SavedFormulasContainer);
