import React, { Component } from 'react';
import { Link } from 'react-router'

class IndexContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formulas: {}
      };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
  fetch(`/api/v1/coffee_formulas.json`, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  }).then(response => response.json())
    .then(body => {
    this.setState({ formulas: body.coffee_formulas })
  })
  }

  handleDelete(id) {
    fetch(`/api/v1/coffee_formulas/${id}`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'delete'
    }).then(response => {
      this.props.router.push('/');
    });
  }

  render() {
    return(
      <div>
        <div className="text-center">
        <h3 className="tag-line">BREW SOME DAMN FINE COFFEE</h3>
          <Link to='/new'>
            <button className="button custom" href="#" >
              START A NEW BREW
            </button>
          </Link>
          <div className="text-center">
            <Link to='/formulas'>
              <button className="button custom" href="#" >
                SAVED FORMULAS
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexContainer;
