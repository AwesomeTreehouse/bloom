import React from 'react';
import InputField from './InputField'

const TimerForm = props => {
  return(
    <div>
      <h4>Set Timer:</h4>
      <div>
        <InputField
          type='number'
          pattern="[0-9.]*"
          name='minutes'
          label='Minutes'
          handleFieldChange={props.handleFieldChange}
        />
        <InputField
          type='number'
          pattern="[0-9.]*"
          name='seconds'
          label='Seconds'
          handleFieldChange={props.handleFieldChange}
        />
    </div>
    </div>
  )
}

export default TimerForm;
