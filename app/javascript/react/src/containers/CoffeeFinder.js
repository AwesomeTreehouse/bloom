import React, { Component } from 'react';
import InputField from '../components/InputField'

class CoffeeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div>
        Enter your zip-code to find the nearest coffee roaster<InputField/>
      </div>
    );
  }
}

export default CoffeeFinder;
