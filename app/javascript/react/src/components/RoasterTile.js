import React from 'react';
import { Link } from 'react-router';

const RoasterTile = props => {
  return(
    <div className="medium-4 columns">
      <div className="coffee-formula-tile">
        <Link to={`/`} >
          <h6></h6>
          <hr/>
          <p></p>
        </Link>
      </div>
    </div>
  )
};

export default RoasterTile;
