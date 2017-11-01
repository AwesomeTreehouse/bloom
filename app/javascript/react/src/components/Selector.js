import React from 'react';


const Selector = props => {
  let ratioOptions = props.ratio.map(option => {
    return (
      <option key={option} value={props.option}>{option}</option>
    );
  })

  return (
    <label>
      <select name={props.name} value={props.ratioSelected} onChange={props.handleRatioSelection}>
        <option value=""></option>
        {ratioOptions}
      </select>
    </label>
  )
}

export default Selector;
