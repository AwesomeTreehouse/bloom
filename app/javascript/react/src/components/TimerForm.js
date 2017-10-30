import React from 'react';

const TimerForm = props => {
  return(
    <div>
      <h4>Set Timer:</h4>
        <form className={props.className}>
          <input
            type='text'
            placeholder='minutes'
          />
        </form>
        <form className={props.className}>
          <input
            type='text'
            placeholder='seconds'
          />
        </form>
    </div>
  )
}

export default TimerForm;
