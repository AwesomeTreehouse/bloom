import React, { Component } from 'react';

class CoffeeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div className="coffee-search-showpage">
        <div className="text-center">
          <form>
            <fieldset className="fieldset">
              <legend id="find-coffee">FIND MORE COFFEE</legend>

              <label>
                <input id='name' name='name' type='number' pattern="[0-9.]*" placeholder="Enter your zip-code"/>
              </label>
              <button className="button custom" href="#" >
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
