import React from 'react';

const FormulaShow = props => {
  return(
    <div className="text-center">
      <div className="coffee-form-container">
        <div className="large-12 columns">
          <div className="medium-12 columns">
            <p>{props.date}</p>
            <p>{props.tool}</p>
            <p>{props.beans}</p>
            <p>{props.grind}</p>
            <p>{props.measurement}</p>
            <p>{props.ratio}</p>
            <p>{props.grounds}</p>
            <p>{props.water}</p>
            <p>{props.minutes}</p>
            <p>{props.seconds}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormulaShow;
