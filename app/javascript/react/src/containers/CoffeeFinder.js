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
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleFieldChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  handlePost(event) {
    event.preventDefault();
    if (this.state.zipcode == '' || this.state.zipcode == null) {
      this.setState({ title: 'Please enter a zip-code' });
    } else {

      fetch('/api/v1/roasters', {
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          "Content-Type": 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ zipcode: this.state.zipcode })
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ roasterList: body });
      });
    }
  }

  render() {
    let roasters;
    if (this.state.roasterList.length !== 0) {
      roasters = this.state.roasterList.map(roaster => {
        return(
          <RoasterTile
            key={roaster.id}
            name={roaster.name}
            address={roaster.location.display_address}
            image={roaster.image_url}
            phone={roaster.display_phone}
            linkAddress={roaster.location.address1}
            city={roaster.location.city}
            state={roaster.location.state}
            zip={roaster.location.zip_code}
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

              <button onClick={this.handlePost} className="button custom" href="#" >
                SEARCH
              </button>

            </fieldset>
          </form>
          {roasters}
        </div>
      </div>
    );
  }
}

export default CoffeeFinder;
