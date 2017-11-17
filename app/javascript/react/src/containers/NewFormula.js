import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import DescriptionForm from './../components/DescriptionForm';

class NewFormula extends Component {
  constructor(props) {
    super(props);
      this.state = {
        bean: this.props.bean,
        tool: this.props.tool,
        grind: this.props.grind,
        measurement: this.props.measurement,
        ratio: this.props.ratio,
        grounds: this.props.grounds,
        water: this.props.water,
        minutes: this.props.minutes,
        seconds: this.props.seconds,
        time: this.props.time,
        description: null,
        formulaInfo: [],
        user: this.props.user,
        error: 'Here\'s your brew'
    };
    this.handleDescription = this.handleDescription.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  saveInfo(event) {
    event.preventDefault();
    if (this.state.user == "none") {
      this.setState({ error: 'Please sign in to save your formula' });
    } else {
      fetch(`/api/v1/coffee_formulas`, {
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          formula: {
            bean: this.state.bean,
            tool: this.state.tool,
            grind: this.state.grind,
            measurement: this.state.measurement,
            ratio: this.state.ratio,
            coffee_weight: parseInt(this.state.grounds),
            water_weight: parseInt(this.state.water),
            minutes: parseInt(this.state.minutes),
            seconds: parseInt(this.state.seconds),
            time: parseInt(this.state.time),
            note: this.state.description
          }
        })
      })
      .then(response => response.json())
      .then(response => {
        this.props.router.push(`/`);
      });
    }
  }

  render() {
    return(
      <div className="formula-show-page">
        <h3>{this.state.error}</h3>
        <div className="inner-tile">
          <div className="medium-4 small-6 columns">
            <h6>Beans: <p>{this.state.bean}</p></h6>
          </div>
          <div className="medium-4 small-6 columns">
            <h6>Tool: <p>{this.state.tool}</p></h6>
          </div>
          <div className="medium-4 small-6 columns">
            <h6>Grind: <p>{this.state.grind}</p></h6>
          </div>
          <div className="medium-4 small-6 columns">
            <h6>Ratio: <p>{this.state.ratio}</p></h6>
          </div>
          <div className="medium-4 small-6 columns">
            <h6>Grounds: <p>{this.state.grounds} {this.state.measurement}</p></h6>
          </div>
          <div className="medium-4 small-6 columns">
            <h6>Time: <p>{this.state.minutes}m {this.state.seconds}s</p></h6>
          </div>
          <div className="text-center">
            <h6>Notes:</h6>
              <DescriptionForm
                type='text'
                name='descripton'
                handleFieldChange={this.handleDescription}
              />
            <Link to='/'><button className="button custom" href="#" onClick={this.saveInfo}>SAVE</button></Link>
            <Link to='/'><button className="button custom" href="#" >DISCARD</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewFormula);
