import React, { Component } from 'react';
import { withRouter } from 'react-router'

class SavedFormulasContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formulas: {}
      };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/coffee_formulas`)
    .then(response => response.json())
    .then(body => {
      this.setState({ formulas: body })
    })
    console.log(body);
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
      <p>Goodbye World :(</p>
    )
  }
}

export default withRouter(SavedFormulasContainer);
