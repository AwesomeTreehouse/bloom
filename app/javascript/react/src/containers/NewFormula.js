import React, { Component } from 'react';
import { Link } from 'react-router'
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
        formulaInfo: []
    }
    this.saveInfo = this.saveInfo.bind(this);
  }

  saveInfo(event) {
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
          seconds: parseInt(this.state.seconds)
        }
      })
    })
    .then(response => response.json())
    .then(response => {
      let newFormula = this.state.formulaInfo.concat(response)
      this.setState({ formulaInfo: newFormula })
    })
  }

  render() {
    return(
      <div>
        <label><p className="form-tagline">Here's your brew:</p>
          <div className="large-12 columns">
            <div className="medium-12 columns">
              <div className="medium-6 columns">
                <label>Beans:
                  <p>{this.state.beans}</p>
                </label>
              </div>
              <div className="medium-6 columns">
                <label>Tool:
                  <p>{this.state.tool}</p>
                </label>
              </div>
              <div className="medium-6 columns">
                <label>Grind:
                  <p>{this.state.grind}</p>
                </label>
              </div>
              <div className="medium-6 columns">
                <label>Ratio:
                  <p>{this.state.ratio}</p>
                </label>
              </div>
              <div className="medium-6 columns">
                <label>Grounds:
                  <p>{this.state.grounds} {this.state.measurement}</p>
                </label>
              </div>
              <div className="medium-6 columns">
                <label>Time:
                  <p>{this.state.minutes}m {this.state.seconds}s</p>
                </label>
              </div>
              <DescriptionForm
                type='text'
                />
              <div className="text-center">
                <button onClick={this.saveInfo} className="button custom" href="#" >
                  SAVE
                </button>
                <Link to='/saved'>
                  <button className="button custom" href="#" onClick={this.saveInfo}>
                    SAVE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default NewFormula;
