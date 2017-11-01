import React from 'react';
import InputField from './InputField'


const RatioHelper = props => {

  let ratioOptions = props.ratio.map(option => {
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  let measurementOptions = props.measurement.map(option => {
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  return(
    <div className="row">
      <div className="large-12 columns measure">
        <label>System of Measurement
          <select
            name={props.measurementName}
            value={props.measurementSelected}
            onChange={props.handleMeasurementSelection}>
            <option value=""></option>
            {measurementOptions}
          </select>
        </label>

        <div className="large-6 columns">
          <label>Ratio
            <select
              name={props.ratioName}
              value={props.ratioSelected}
              onChange={props.handleRatioSelection}>
              <option value=""></option>
              {ratioOptions}
            </select>
          </label>
        </div>
      <div className="large-6 columns">
        <label>Grounds
          <InputField
            type='number'
            pattern="[0-9.]*"
            name='grounds'
            placeholder={props.grounds}
            handleFieldChange={props.handleBrewMath}
            />
        </label>
      </div>
        <div className="large-6 columns water">
          <h6>Water: {props.water} {props.measurementSelected}</h6>
        </div>
        <div className="large-6 columns yeild">
          <h6>Final Yeild: {props.finalBrew} {props.measurementSelected}</h6>
        </div>
      </div>
    </div>
  )
}

export default RatioHelper;
