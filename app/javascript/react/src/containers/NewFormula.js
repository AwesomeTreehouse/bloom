import React, { Component } from 'react';

const NewFormula = props => {
  return(
    <div className="medium-12 columns">
      <ul>
        <li>Tool Used: {props.tool}</li>
      </ul>
    </div>
  );
}

export default NewFormula;
