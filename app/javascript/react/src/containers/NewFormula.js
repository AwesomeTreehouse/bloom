import React, { Component } from 'react';
import { Link } from 'react-router'
import InputField from './../components/InputField'

const NewFormula = props => {
  return(
    <div>
      <label><p className="form-tagline">Here's what you just did:</p>
      <div className="large-12 columns">
        <div className="medium-12 columns">
          <div className="medium-6 columns">
            <label>Beans:
              <p>{props.beans}</p>
            </label>
          </div>
          <div className="medium-6 columns">
            <label>Tool:
              <p>{props.tool}</p>
            </label>
          </div>
          <div className="medium-6 columns">
            <label>Grind:
              <p>{props.grind}</p>
            </label>
          </div>
          <div className="medium-6 columns">
            <label>Ratio:
              <p>{props.ratio}</p>
            </label>
          </div>
          <div className="medium-6 columns">
            <label>Grind:
              <p>{props.grounds} {props.measurement}</p>
            </label>
          </div>
          <div className="medium-6 columns">
            <label>Time:
              <p>{props.minutes}m {props.seconds}s</p>
            </label>
          </div>
          <InputField
            type='text'
          />
          <Link to='/'>
            <button className="button custom" href="#" >
              SAVE
            </button>
          </Link>
        </div>
        </div>
    </label>
  </div>
  );
}

export default NewFormula;
