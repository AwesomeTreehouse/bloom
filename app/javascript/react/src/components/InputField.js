import React from 'react';

const InputField = props => {
  return(
    <form className={props.className}>
      <input
        type={props.type}
        pattern={props.pattern}
        id={props.name}
        name={props.name}
        placeholder={props.label}
        onChange={props.handleFieldChange}
      />
  </form>
  )
}

export default InputField;
