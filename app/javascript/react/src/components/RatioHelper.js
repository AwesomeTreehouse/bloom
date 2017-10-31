import React from 'react';
import InputField from './InputField'

const RatioHelper = props => {

  return(
    <div>
      <h4>Coffee to Water Ratio:</h4>
      <div>
        <p>Coffee Ratio:</p>
        <InputField
          type='number'
          pattern="[0-9.]*"
          name='coffeeRatio'
          label={props.coffee}
          handleFieldChange={props.handleFieldChange}
        />
        <p>Water Ratio:</p>
        <InputField
          type='number'
          pattern="[0-9.]*"
          name='waterRatio'
          label={props.water}
          handleFieldChange={props.handleFieldChange}
        />
      </div>
    </div>
  )
}

export default RatioHelper;
