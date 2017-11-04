import React, { Component } from 'react';
import { Link } from 'react-router';
import { Route, Redirect } from 'react-router';

class SaveFormula extends Component {
  constructor(props) {
    super(props);
      this.state = {
        beans: this.props.beans,
        tool: this.props.tool,
        grind: this.props.grind,
        measurement: this.props.measurement,
        ratio: this.props.ratio,
        grounds: this.props.grounds,
        water: this.props.water,
        minutes: this.props.minutes,
        seconds: this.props.seconds
    };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(event) {
    event.preventDefault();
    let formPayload = ({
      formula: {
        beans: this.state.beans,
        tool: this.state.tool,
        grind: this.state.grind,
        measurement: this.state.measurement,
        ratio: this.state.ratio,
        coffee_weight: parseInt(this.state.grounds),
        water_weight: parseInt(this.state.water),
        minutes: parseInt(this.state.minutes),
        seconds: parseInt(this.state.seconds)
      }
    });
    this.props.saveFormula(formPayload);
  }

  render() {
    return(
      <div className="text-center">
        <button onClick={this.handleSave} className="button custom" href="#" >
          SAVE
        </button>
      </div>
    )
  }
}

export default SaveFormula;
