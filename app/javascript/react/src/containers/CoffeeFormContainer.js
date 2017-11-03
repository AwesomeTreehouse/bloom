import React, { Component } from 'react';
import { Link } from 'react-router'
import { Route, Redirect } from 'react-router'
import BrewInformation from '../components/BrewInformation';
import RatioHelper from '../components/RatioHelper';
import TimerForm from '../components/TimerForm';
import CountDown from 'react-countdown-now';
import NewFormula from './NewFormula';

class CoffeeFormContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        time: 0,
        minutes: 0,
        seconds: 0,
        measurement: ['grams', 'ounces'],
        measurementSelected: 'grams',
        ratio: ['14:1', '15:1', '16:1', '17:1', '18:1'],
        ratioSelected: '16:1',
        ratioValue: 16,
        grounds: 0,
        water: 0,
        finalBrew: 0,
        tools: [ 'AeroPress', 'Bee House', 'Chemex', 'French Press', 'Hario V60', 'Kalita Wave', 'Sowden SoftBrew'],
        toolSelected: '',
        grinds: ['Extra Fine', 'Fine', 'Medium-Fine', 'Medium', 'Medium-Coarse', 'Coarse', 'Extra Coarse'],
        grindSelected: '',
        beans: '',
        timerRendered: false
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleToolSelection = this.handleToolSelection.bind(this);
    this.handleGrindSelection = this.handleGrindSelection.bind(this);
    this.handleMeasurementSelection = this.handleMeasurementSelection.bind(this);
    this.handleRatioSelection = this.handleRatioSelection.bind(this);
    this.handleBrewMath = this.handleBrewMath.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.saveInfo= this.saveInfo.bind(this);
  }

  handleFieldChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleToolSelection(event) {
    this.setState({ toolSelected: event.target.value })
  }

  handleGrindSelection(event) {
    this.setState({ grindSelected: event.target.value })
  }

  handleMeasurementSelection(event) {
    this.setState({ measurementSelected: event.target.value });
  }

  handleRatioSelection(event) {
    if (event.target.value == '14:1') {
      this.setState({ ratioValue: 14 });
    } else if (event.target.value == '15:1') {
      this.setState({ ratioValue: 15 });
    } else if (event.target.value == '16:1') {
      this.setState({ ratioValue: 16 });
    } else if (event.target.value == '17:1') {
      this.setState({ ratioValue: 17 });
    } else if (event.target.value == '18:1') {
      this.setState({ ratioValue: 18 });
    }
    this.setState({ ratioSelected: event.target.value });
  }

  handleBrewMath(event) {
    let absorption = event.target.value * 2
    let waterAmount = event.target.value * this.state.ratioValue
    let finalVolume = waterAmount - absorption
    this.setState({
      grounds: event.target.value,
      water: waterAmount,
      finalBrew: finalVolume
    })
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.seconds != '' || this.state.minutes != '') {
      this.setState({
        time: parseInt(this.state.seconds) * 1000 + parseInt(this.state.minutes) * 60000,
        timerRendered: true
      });
    }
  }

  resetTimer(event) {
    this.setState({
      minutes: 0,
      seconds: 0,
      time: 0,
      timerRendered: false
    });
  }

  saveInfo(event) {
    fetch(`/api/vi/coffee_formulas`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        formula: {

        }
      })
    }).then(response => response.json())
      .then(response => {
        this.props.router.push(`/coffee_formulas/${response.coffee_formulas.id}`)
      })
  }

  render() {
    if (this.state.timerRendered == true) {
      return(
        <div className="small-12 columns">
          <div className="text-center">
            <CountDown date={ Date.now() + this.state.time }>
              <NewFormula
                beans={this.state.beans}
                tool={this.state.toolSelected}
                grind={this.state.grindSelected}
                measurement={this.state.measurementSelected}
                ratio={this.state.ratioSelected}
                grounds={this.state.grounds}
                water={this.state.water}
                minutes={this.state.minutes}
                seconds={this.state.seconds}
              />
            </CountDown>
          </div>
        </div>
      );
    } else {
      return(
        <div className="text-center">
          <p className="form-tagline">FILL THIS OUT</p>
          <div className="coffee-form-container">
            <div className="large-12 columns">
              <div className="medium-12 columns">
                <div className="medium-6 columns">
                  <BrewInformation
                    tools={this.state.tools}
                    toolSelected={this.state.toolSelected}
                    handleToolSelection={this.handleToolSelection}
                    grinds={this.state.grinds}
                    grindSelected={this.state.grindSelected}
                    handleGrindSelection={this.handleGrindSelection}
                    handleFieldChange={this.handleFieldChange}
                    />
                </div>
                <div className="medium-6 columns">
                  <RatioHelper
                    ratioName='ratio'
                    ratio={this.state.ratio}
                    ratioSelected={this.state.ratioSelected}
                    handleRatioSelection={this.handleRatioSelection}
                    measurementName='system of measurement'
                    measurement={this.state.measurement}
                    measurementSelected={this.state.measurementSelected}
                    handleMeasurementSelection={this.handleMeasurementSelection}
                    grounds={this.state.grounds}
                    water={this.state.water}
                    finalBrew={this.state.finalBrew}
                    handleBrewMath={this.handleBrewMath}
                    />
                </div>
              </div>
              <div className="medium-12 columns">
                <div className="large-6 columns">
                  <h6>Water Weight: {this.state.water} {this.state.measurementSelected}</h6>
                </div>
                <div className="large-6 columns">
                  <h6>Final Yield: {this.state.finalBrew} {this.state.measurementSelected}</h6>
                </div>
              </div>
              <TimerForm
                handleFieldChange={this.handleFieldChange}
                />
              <span>
                <button className="button custom" href="#" onClick={this.handleClick}>START</button>
                <Link to='/'><button className="button custom" href="#" >CANCEL</button></Link>
              </span>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CoffeeFormContainer;
