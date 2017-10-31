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
        coffeeRatio: 1,
        waterRatio: 16,
        
        timerRendered: false,
        highlight: ""
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleFieldChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.seconds != '' || this.state.minutes != '') {
      this.setState({
        time: parseInt(this.state.seconds) * 1000 + parseInt(this.state.minutes) * 60000,
        timerRendered: true,
        highlight: ""
      });
    } else {
      this.setState({
        highlight: "red"
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

  ratioHelper() {

  }

  render() {
    if (this.state.timerRendered == true) {
      return(
        <div className="timer-component">
          <CountDown date={ Date.now() + this.state.time } />
          <button className="button custom" href="#" onClick={this.resetTimer}>RESET</button>
        </div>
      );
    } else {
      return(
        <div className="coffee-container">
          <h4>Fill this shit out:</h4>
          <BrewInformation />
          <RatioHelper
            handleFieldChange={this.handleFieldChange}
            coffee={this.state.coffeeRatio}
            water={this.state.waterRatio}
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
