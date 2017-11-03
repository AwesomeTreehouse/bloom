import React, { Component } from 'react';
import { Link } from 'react-router'
import DescriptionForm from './../components/DescriptionForm'
import SaveFormula from '../components/SaveFormula'

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
    this.saveInfo= this.saveInfo.bind(this);
  }

  saveInfo(formPayload) {
    fetch(`/api/v1/coffee_formulas`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        formulaInfo: this.state.formulaInfo.concat(body.formula)
      })
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
              <SaveFormula
                beans={this.state.beans}
                tool={this.state.tool}
                grind={this.state.grind}
                water={this.state.water}
                measurement={this.state.measurement}
                ratio={this.state.ratio}
                grounds={this.state.grounds}
                minutes={this.state.minutes}
                seconds={this.state.seconds}
                saveFormula={this.saveInfo}
                />
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default NewFormula;
