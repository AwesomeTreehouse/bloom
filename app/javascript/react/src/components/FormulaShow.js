import React from 'react';

const FormulaShow = props => {

  let date = new Date(Date.parse(props.date)).toDateString();

  let deleteDiv = () => {
    let handleButtonClick = () => props.handleDelete(props.id);
    return(
      <div className="button custom delete" onClick={handleButtonClick}>DELETE</div>
    )
  }

  let updateDiv = () => {
    let handleButtonClick = () => props.handleUpdate(props.id);
    return(
      <div className="button custom" onClick={handleButtonClick}>SAVE</div>
    )
  }

  let startTimerDiv = () => {
    let handleButtonClick = () =>
    props.handleReuseTimer(props.id);
    return(
      <div className="button custom" onClick={handleButtonClick}>START TIMER</div>
    )
  }

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
            <form id="text-area">
              <input
                id={props.id}
                type='text'
                name='description'
                placeholder={props.note}
                onChange={props.handleDescriptionChange}
              />
            </form>
          <div>
            <h6>Time: </h6><p>{props.minutes}m {props.seconds}s</p>
          </div>
            {startTimerDiv()}
            {updateDiv()}
            {deleteDiv()}
        </div>
      </div>
    </div>
  )
}

export default FormulaShow;
