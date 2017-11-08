import React, { Component } from 'react';
import RoasterTile from '../components/RoasterTile';

class CoffeeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Find More Coffee',
      zipcode: null,
      roasterList: []
    };
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handlePost = this.handlePost.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/roasters.json`, {
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      method: 'GET', redirect: 'follow'
    }).then(response => response.json())
      .then(body => {
      this.setState({ roasterList: body.roasters })
    })
  }

  handleFieldChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  handlePost(formPayload) {
    fetch('/api/v1/static_pages', {
      credentials: 'same-origin',
      headers: {
        "Content-Type": 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ roasterList: body })
    })
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.state.zipcode == '' || this.state.zipcode == null) {
      this.setState({ title: 'Please enter a zip-code' })
    } else {
      let formPayload = {
        zipcode: this.state.zip
      }
      this.handlePost(formPayload);
    }
  }

  render() {
    let roasters
    if (this.state.roasterList.length !== 0) {
      roasters = this.state.roasterList.map(roaster => {

        return(
          <RoasterTile
            key={roaster.id}
            roaster={roaster}
          />
        )
      })
    }

    return(
      <div className="coffee-search-showpage">
        <div className="text-center">
          <form>
            <fieldset className="fieldset">
              <legend id="find-coffee">{this.state.title}</legend>

              <label>
                <input onChange={this.handleFieldChange} id='name' name='name' type='number' pattern="[0-9.]*" placeholder="Enter your zip-code"/>
              </label>
              <button onClick={this.handleSearch} className="button custom" href="#" >
                SEARCH
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default CoffeeFinder;
