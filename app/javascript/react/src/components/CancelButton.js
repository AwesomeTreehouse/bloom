import React from 'react'

const CancelButton = props => {
  return(
    <a className="button custom" onClick={props.handleShowForm} >
      CANCEL
    </a>
  )
}

export default CancelButton;
