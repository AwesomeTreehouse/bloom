import React, { Component } from 'react';
import { Link } from 'react-router'

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
    return(
      <div className="medium-12 columns">
        <div className="text-center">
        <p>BREW SOME DAMN FINE COFFEE</p>
          <button className="button custom" href="#" >
            <Link to='/form'>START A NEW BREW</Link>
          </button>
        </div>
      </div>
    )
  }
}

export default IndexContainer;
