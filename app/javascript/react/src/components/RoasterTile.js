import React from 'react';
import { Link } from 'react-router';

const RoasterTile = props => {
  return(
    <div className="medium-6 columns">
      <div className="roaster-tile">
        <img src={props.image}/>
        <h6>{props.name}</h6>
      <hr/>
        <p>{props.address}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  )
};

export default RoasterTile;
