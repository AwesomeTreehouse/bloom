import React from 'react';
import CountDown from 'react-countdown-now';
import NewFormula from './../containers/NewFormula'

const FormulaShow = props => {
  let date = new Date(Date.parse(props.date)).toDateString()

  if (props.reuseTimer) {
    return(
      <div className="small-12 columns">
        <div className="text-center">
          <CountDown date={ Date.now() + props.time }>
            <div className="row">
              <div className="formula-show-page">
                <h6>Brewed on </h6><p>{date}</p>
                <div className="inner-tile">
                  <div className="medium-4 small-6 columns">
                    <h6>Tool: </h6><p>{props.tool}</p>
                  </div>
                  <div className="medium-4 small-6 columns">
                    <h6>Beans: </h6><p>{props.bean}</p>
                  </div>
                  <div className="medium-4 small-6 columns">
                    <h6>Grind: </h6><p>{props.grind}</p>
                  </div>
                  <div className="medium-4 small-6 columns">
                    <h6>Ratio: </h6><p>{props.ratio}</p>
                  </div>
                  <div className="medium-4 small-6 columns">
                    <h6>Grounds: </h6><p>{props.grounds} {props.measurement}</p>
                  </div>
                  <div className="medium-4 small-6 columns">
                    <h6>Water:</h6><p>{props.water} {props.measurement}</p>
                  </div>
                  <hr/>
                    <p>{props.note}</p>
                  <hr/>
                  <div>
                    <h6>Time: </h6><p>{props.minutes}m {props.seconds}s</p>
                  </div>
                </div>
              </div>
            </div>
          </CountDown>
        </div>
      </div>
    );
  } else {
    return(
      <div className="row">
        <div className="formula-show-page">
          <h6>Brewed on </h6><p>{date}</p>
          <div className="inner-tile">
            <div className="medium-4 small-6 columns">
              <h6>Tool: </h6><p>{props.tool}</p>
            </div>
            <div className="medium-4 small-6 columns">
              <h6>Beans: </h6><p>{props.bean}</p>
            </div>
            <div className="medium-4 small-6 columns">
              <h6>Grind: </h6><p>{props.grind}</p>
            </div>
            <div className="medium-4 small-6 columns">
              <h6>Ratio: </h6><p>{props.ratio}</p>
            </div>
            <div className="medium-4 small-6 columns">
              <h6>Grounds: </h6><p>{props.grounds} {props.measurement}</p>
            </div>
            <div className="medium-4 small-6 columns">
              <h6>Water:</h6><p>{props.water} {props.measurement}</p>
            </div>
            <hr/>
              <p>{props.note}</p>
            <hr/>
            <div>
              <h6>Time: </h6><p>{props.minutes}m {props.seconds}s</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormulaShow;
