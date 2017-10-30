import React, { Component } from 'react';
import BrewInformation from '../components/BrewInformation';
import RatioHelper from '../components/RatioHelper';
import TimerForm from '../components/TimerForm';

class CoffeeFormContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {

    };

  }


  render() {
    return(
      <div className="coffee-container">
        <h4>Fill this shit out:</h4>
        <BrewInformation />
        <RatioHelper />
        <TimerForm />
      </div>
    );
  }
}

export default CoffeeFormContainer;
