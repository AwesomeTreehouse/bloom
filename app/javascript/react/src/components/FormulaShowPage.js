import React, { Component } from 'react';
import { withRouter } from 'react-router'

class FormulaShowPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formulaInfo: {}
      };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let formulaId = this.props.params.id;
    fetch(`/api/v1/coffee_formulas/${formulaId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        formulaInfo: body.formulas
      });
    });
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
      <p>Goodbye World</p>
    )
  }
}

export default withRouter(FormulaShowPage);
