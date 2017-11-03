import React from 'react';

const DescriptionForm = props => {
  return(
    <form className={props.className}>
      <textarea
        id={props.name}
        placeholder={props.placeholder}
        type={props.type}
        pattern={props.pattern}
        name={props.name}
        value={props.value}
        onChange={props.handleFieldChange}
      />
  </form>
  )
}

export default DescriptionForm;
