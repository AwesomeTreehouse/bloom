import React from 'react';
import InputField from './InputField'

const BrewInformation = props => {

  let toolOptions = props.tools.map(option => {
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  let grindOptions = props.grinds.map(option => {
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  return(
    <div className="row">
      <label>Beans
        <InputField
          type='text'
          name='bean'
          handleFieldChange={props.handleFieldChange}
        />
      </label>

      <label>Brewing Tool
        <select
          value={props.toolSelected}
          onChange={props.handleToolSelection}>
          <option value=""></option>
          {toolOptions}
        </select>
      </label>

      <label>Grind
        <select
          value={props.grindSelected}
          onChange={props.handleGrindSelection}>
          <option value=""></option>
          {grindOptions}
        </select>
      </label>
  </div>
  )
}

export default BrewInformation;
