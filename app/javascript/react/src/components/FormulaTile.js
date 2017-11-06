import React from 'react';
import { Link } from 'react-router';

const FormulaTile = props => {
  let date = new Date(Date.parse(props.formula.updated_at)).toDateString()

  return(
    <div className="large-12 columns">
      <div className="medium-12 columns">
      <Link to={`/coffee_formulas/${props.formula.id}`} >
        <p>{props.formula.tool} - {date}</p>
      </Link>
      </div>
    </div>
  )
};

export default FormulaTile;
