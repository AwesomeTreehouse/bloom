import React from 'react';

const FormulaShow = props => {
    let date = new Date(Date.parse(props.date)).toDateString()

  return(
    <div className="row">
      <div className="formula-show-page">
        <h6>Brewed on {date}</h6>
        <hr/>
        <div className="inner-tile">
          <div className="medium-4 columns">
            <h6>Tool: </h6><p>{props.tool}</p>
          </div>
          <div className="medium-4 columns">
            <h6>Beans: </h6><p>{props.beans}</p>
          </div>
          <div className="medium-4 columns">
            <h6>Grind: </h6><p>{props.grind}</p>
          </div>
          <div className="medium-4 columns">
            <h6>Ratio: </h6><p>{props.ratio}</p>
          </div>
          <div className="medium-4 columns">
            <h6>Grounds: </h6><p>{props.grounds} {props.measurement}</p>
          </div>
          <div className="medium-4 columns">
            <h6>Water:</h6><p>{props.water} {props.measurement}</p>
          </div>
          <hr/>
          <div>
            <h6>Time: </h6><p>{props.minutes}m {props.seconds}s</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormulaShow;
