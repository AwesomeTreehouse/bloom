import React, { Component } from 'react';
import { Link } from 'react-router';
import FormulaTile from '../components/FormulaTile';

class IndexContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formulas:[],
        user: {},
        showFormulas: false
      };
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
      this.setState({
        formulas: body.coffee_formulas,
        user: body.current_user
      })
    })
  }

  showFormulas(event) {
    event.preventDefault();
    this.setState({ showFormulas: true })
  }

  render() {
    let formulas;
    if (this.state.showFormulas == true) {
      formulas = this.state.formulas.map(formula => {
        return(
          <FormulaTile
            key={formula.id}
            formula={formula}
          />
        )
      })
    }

    if (this.state.user !== "none") {
      return(
        <div className="all-formula-tiles">
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
              <div className="row">
                {formulas}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="all-formula-tiles">
          <div className="text-center">
            <h3 className="tag-line">BREW SOME DAMN FINE COFFEE</h3>
            <Link to='/new'>
              <button className="button custom" href="#" >
                START A NEW BREW
              </button>
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default IndexContainer;
