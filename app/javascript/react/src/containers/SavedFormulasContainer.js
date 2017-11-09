import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FormulaShow from '../components/FormulaShow';

class SavedFormulasContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formula: {},
        renderTimer: false,
        note: ''
      };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleReuseTimer = this.handleReuseTimer.bind(this);
  }

  componentDidMount() {
    let formulaId = this.props.params.id;
    fetch(`/api/v1/coffee_formulas/${formulaId}.json`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then(response => response.json())
      .then(body => {
      this.setState({ formula: body.coffee_formula });
    });
  }

  handleDelete(id) {
    fetch(`/api/v1/coffee_formulas/${id}`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }).then(response => {
      this.props.router.push('/');
    });
  }

  handleUpdate(id) {
  //   fetch(`/api/v1/coffee_formulas/${id}`, {
  //     credentials: 'same-origin',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'UPDATE',
  //     body: JSON.stringify({
  //       note: {
  //         note:
  //       }
  //     })
  //   }).then(response => response.json())
  //     .then(response => {
  //       this.props.router.push(`/coffee_formulas/${response.coffee_formulas.id}`);
  //     })
   }

  handleReuseTimer(event) {
    this.setState({ renderTimer: true });
  }

  render() {
    console.log(this.state.formula.time);
    return(
      <div className="text-center">
        <FormulaShow
          id={this.state.formula.id}
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
          handleReuseTimer={this.handleReuseTimer}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          renderTimer={this.state.renderTimer}
        />
      </div>
    )
  }
}

export default withRouter(SavedFormulasContainer);
