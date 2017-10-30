import React, { Component } from 'react';
import InputField from '../components/InputField';
import CoffeeFormContainer from './CoffeeFormContainer'

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeForm: false,
      startButton: true
    };
    this.handleShowForm = this.handleShowForm.bind(this)
    this.handleHideForm = this.handleHideForm.bind(this)
  }

  handleShowForm(event) {
    event.preventDefault();
    this.setState({
      coffeeForm: true,
      startButton: false
    })
  }

  handleHideForm(event) {
    event.preventDefault();
    this.setState({
      coffeeForm: false,
      startButton: true
    })
  }

  render() {

    if (this.state.coffeeForm == false) {
      return(
        <div className="div">
          <button className="button custom" href="#" onClick={this.handleShowForm}>START A NEW BREW</button>
        </div>
      )
    } else {
      return(
        <div className="div">
          <div id="new-brew-form" className="text-center">
            {this.state.coffeeForm && <CoffeeFormContainer />}
          </div>
          <span className="start-cancel-buttons">
            <button className="button custom" href="#">START</button>
            <button className="button custom" href="#" onClick={this.handleHideForm}>CANCEL</button>
          </span>
        </div>
      )
    }
  }
}

export default IndexContainer;
