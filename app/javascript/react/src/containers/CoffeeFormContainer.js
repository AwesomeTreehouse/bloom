import React, { Component } from 'react';
import BrewInformation from '../components/BrewInformation';
import RatioHelper from '../components/RatioHelper';
import TimerForm from '../components/TimerForm';
import CountDown from 'react-countdown-now';

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
        timerRendered: false
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleRatioSelection = this.handleRatioSelection.bind(this);
    this.handleMeasurementSelection = this.handleMeasurementSelection.bind(this);
    this.handleBrewMath = this.handleBrewMath.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleFieldChange(event) {
    this.setState({ [event.target.id]: event.target.value });
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

  handleMeasurementSelection(event) {
    this.setState({ measurementSelected: event.target.value });
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

  render() {
    if (this.state.timerRendered == true) {
      return(
        <div className="timer-component">
          <CountDown date={ Date.now() + this.state.time } />
          <div className="timer-button">
            <button className="button custom" href="#" onClick={this.resetTimer}>RESET</button>
          </div>
        </div>
      );
    } else {
      return(
        <div className="coffee-container">
          <h4>Fill this shit out:</h4>
          <BrewInformation />
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
          <TimerForm
            handleFieldChange={this.handleFieldChange}
          />
        <span>
          <button className="button custom" href="#" onClick={this.handleClick}>START</button>
          <button className="button custom" href="#" onClick={this.handleClick}>CANCEL</button>
        </span>
        </div>
      )
    }
  }
}

export default CoffeeFormContainer;
