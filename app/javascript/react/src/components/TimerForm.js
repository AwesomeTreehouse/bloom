import React from 'react';
import InputField from './InputField'

const TimerForm = props => {
  return(
    <div className="row">
      <div className="text-center">
        <div className="medium-12 columns">
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
      </div>
  )
}

export default TimerForm;
