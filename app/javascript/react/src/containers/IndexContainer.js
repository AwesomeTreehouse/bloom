import React, { Component } from 'react';
import { Link } from 'react-router';
import FormulaTile from '../components/FormulaTile';

class IndexContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formulas:[],
        showFormulas: false
      };
    this.handleDelete = this.handleDelete.bind(this);
    this.showFormulas = this.showFormulas.bind(this);
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

  showFormulas(event) {
    event.preventDefault();
    this.setState({ showFormulas: true })
  }

  render() {
    let formulas;
    if (this.state.formulas.length !== 0 && this.state.showFormulas == true) {
      formulas = this.state.formulas.map(formula => {
        return(
          <FormulaTile
            key={formula.id}
            formula={formula}
          />
        )
      })
    }

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
            <button onClick={this.showFormulas} className="button custom" href="#" >
              SAVED BREWS
            </button>
            <div className="small-12 columns">
              {formulas}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexContainer;
