import React, { Component } from 'react';
import { Link } from 'react-router'

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className="medium-12 columns">
        <div className="text-center">
        <p className="tag-line">BREW SOME DAMN FINE COFFEE</p>
          <Link to='/form'>
            <button className="button custom" href="#" >
              START A NEW BREW
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default IndexContainer;
