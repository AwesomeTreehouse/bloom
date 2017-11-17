import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import CountDown from 'react-countdown-now';
import FormulaShow from '../components/FormulaShow';

class SavedFormulasContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formula: {},
        reusedTime: null,
        newNote: ''
      };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleReuseTimer = this.handleReuseTimer.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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
      this.setState({
        formula: body.coffee_formula,
        newNote: body.coffee_formula.note
      });
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
    fetch(`/api/v1/coffee_formulas/${id}`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        formula: {
          bean: this.state.formula.bean,
          tool: this.state.formula.tool,
          grind: this.state.formula.grind,
          measurement: this.state.formula.measurement,
          ratio: this.state.formula.ratio,
          coffee_weight: parseInt(this.state.formula.coffee_weight),
          water_weight: parseInt(this.state.formula.water_weight),
          minutes: parseInt(this.state.formula.minutes),
          seconds: parseInt(this.state.formula.seconds),
          time: parseInt(this.state.formula.time),
          note: this.state.newNote
        }
      })
    })
    .then(response => response.json())
    .then(response => {
      this.props.router.push(`/`);
    });
   }

  handleReuseTimer(id) {
    this.setState({ reusedTime: this.state.formula.time });
  }

  handleDescriptionChange(event) {
    event.preventDefault();
    this.setState({
      newNote: event.target.value,
      reusedTime: null
    });
  }

  render() {
    return(
      <div className="small-12 columns">
        <div className="text-center">
          <CountDown date={ Date.now() + this.state.reusedTime }>
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
              newNote={this.state.newNote}
              handleDescriptionChange={this.handleDescriptionChange}
              handleUpdate={this.handleUpdate}
              handleReuseTimer={this.handleReuseTimer}
              handleDelete={this.handleDelete}
            />
          </CountDown>
        </div>
      </div>
    )
  }
}

export default withRouter(SavedFormulasContainer);
