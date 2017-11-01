import React from 'react';
import InputField from './InputField'

const TimerForm = props => {
  return(
    <div className="row">
        <div className="large-12 columns">
          <h4>Set Timer:</h4>
          <div className="large-6 small-6 columns">
            <label>Minutes
              <InputField
                type='number'
                pattern="[0-9.]*"
                name='minutes'
                label='Minutes'
                handleFieldChange={props.handleFieldChange}
                />
            </label>
          </div>
          <div className="large-6 small-6 columns">
            <label>Seconds
              <InputField
                type='number'
                pattern="[0-9.]*"
                name='seconds'
                label='Seconds'
                handleFieldChange={props.handleFieldChange}
              />
          </label>
        </div>
      </div>
    </div>
  )
}

export default TimerForm;
