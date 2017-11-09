import React, { Component } from 'react';
import { withRouter } from 'react-router'
import FormulaShow from '../components/FormulaShow'

class SavedFormulasContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formula: {},
        reuseTimer: false
      };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReuseTimer = this.handleReuseTimer.bind(this);
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
      this.setState({ formula: body.coffee_formula })
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

  handleReuseTimer(event) {
    event.preventDefault();
    this.setState({ reuseTimer: true })
  }

  render() {
    return(
      <div className="text-center">
        <FormulaShow
          date={this.state.formula.updated_at}
          bean={this.state.formula.bean}
          tool={this.state.formula.tool}
          grind={this.state.formula.grind}
          measurement={this.state.formula.measurement}
          ratio={this.state.formula.ratio}
          grounds={this.state.formula.coffee_weight}
          water={this.state.formula.water_weight}
          minutes={this.state.formula.minutes}
          seconds={this.state.formula.seconds}
          time={this.state.formula.time}
          note={this.state.formula.note}
          reuseTimer={this.state.reuseTimer}
        />
        <button className="button custom" onClick={this.handleReuseTimer} href="#">START</button>
      </div>
    )
  }
}

export default withRouter(SavedFormulasContainer);
