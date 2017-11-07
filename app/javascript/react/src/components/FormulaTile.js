import React from 'react';
import { Link } from 'react-router';

const FormulaTile = props => {
  let date = new Date(Date.parse(props.formula.updated_at)).toDateString()

  return(
    <div className="medium-4 columns">
      <div className="coffee-formula-tile">
        <Link to={`/coffee_formulas/${props.formula.id}`} >
          <h6>{date}</h6>
          <hr/>
          <p>{props.formula.tool}</p>
        </Link>
      </div>
    </div>
  )
};

export default FormulaTile;
