import React, { Component } from 'react';
import { Link } from 'react-router'
import { withRouter } from 'react-router'
import DescriptionForm from './../components/DescriptionForm'

class NewFormula extends Component {
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
        seconds: this.props.seconds,
        time: this.props.time,
        description: null,
        formulaInfo: [],
        user: this.props.user,
        error: 'Here\'s your brew'
    }
    this.handleDescription = this.handleDescription.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  handleDescription(event) {
    this.setState({ description: event.target.value })
  }

  saveInfo(event) {
    event.preventDefault();
    if (this.state.user == "none") {
      this.setState({ error: 'Please sign in to save your formula' })
    } else {
      fetch(`/api/v1/coffee_formulas`, {
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          formula: {
            beans: this.state.beans,
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
        this.props.router.push(`/coffee_formulas/${response.coffee_formulas.id}`)
      })
    }
  }

  render() {
    return(
      <div>
        <label><p className="form-tagline">{this.state.error}</p>
          <div className="large-12 columns">
            <div className="medium-12 columns">
              <div className="medium-2 small-6 columns">
                <label>Beans:
                  <p>{this.state.beans}</p>
                </label>
              </div>
              <div className="medium-2 small-6 columns">
                <label>Tool:
                  <p>{this.state.tool}</p>
                </label>
              </div>
              <div className="medium-2 small-6 columns">
                <label>Grind:
                  <p>{this.state.grind}</p>
                </label>
              </div>
              <div className="medium-2 small-6 columns">
                <label>Ratio:
                  <p>{this.state.ratio}</p>
                </label>
              </div>
              <div className="medium-2 small-6 columns">
                <label>Grounds:
                  <p>{this.state.grounds} {this.state.measurement}</p>
                </label>
              </div>
              <div className="medium-2 small-6 columns">
                <label>Time:
                  <p>{this.state.minutes}m {this.state.seconds}s</p>
                </label>
              </div>
              <div className="text-center">
                <label>Notes:
                  <DescriptionForm
                    type='text'
                    name='descripton'
                    handleFieldChange={this.handleDescription}
                  />
                </label>
                <Link to='/'><button className="button custom" href="#" onClick={this.saveInfo}>SAVE</button></Link>
                <Link to='/'><button className="button custom" href="#" >DISCARD</button></Link>
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default withRouter(NewFormula);
