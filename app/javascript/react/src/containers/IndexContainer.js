import React, { Component } from 'react';
import CoffeeFormContainer from './CoffeeFormContainer'

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeForm: false
    };
    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleHideForm = this.handleHideForm.bind(this);
  }

  handleShowForm(event) {
    this.setState({ coffeeForm: true })
  }

  handleHideForm(event) {
    this.setState({ coffeeForm: false })
  }

  render() {
    if (this.state.coffeeForm == false) {
      return(
        <div className="text-center">
          <button className="button custom" href="#" onClick={this.handleShowForm}>START A NEW BREW</button>
        </div>
      )
    } else {
      return(
        <div className="new-brew-form">
          <div className="text-center">
            <CoffeeFormContainer />
          </div>
        </div>
      )
    }
  }
}

export default IndexContainer;
