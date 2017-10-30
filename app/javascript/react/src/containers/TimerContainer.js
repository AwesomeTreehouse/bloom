import React, { Component } from 'react';
import CountDown from 'react-countdown-now';
import InputField from '../components/InputField';

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      minutes: 0,
      seconds,
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

  render() {
    if (this.state.timerRendered === true) {
      return(
        <div className="timer-component">
          <Countdown date={ Date.now() + this.state.time } />
          <button className="hollow button" href="#" onClick={this.resetTimer}>Reset</button>
        </div>
      )
    }
  return(
    <div className="field">
      <InputField
          className={this.state.highlight}
          type='number'
          pattern="[0-9.]*"
          name='minutes'
          label='Minutes'
          handleFieldChange={this.handleFieldChange}
        />
        <InputField
          className={this.state.highlight}
          type='number'
          pattern="[0-9.]*"
          name='seconds'
          label='Seconds'
          handleFieldChange={this.handleFieldChange}
          />
        <button
          className="hollow button" href="#"
          onClick={this.handleClick}>Start</button>
      </div>
    )
  }
}

export default TimerContainer;
