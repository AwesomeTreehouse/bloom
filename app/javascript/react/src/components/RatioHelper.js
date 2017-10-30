import React from 'react';

const RatioHelper = props => {
  return(
    <div>
      <h4>Ratio Helper:</h4>
        <form className={props.className}>
          <input
            type='text'
            placeholder='ratio'
          />
        </form>
        <form className={props.className}>
          <input
            type='text'
            placeholder='ratio'
          />
        </form>
    </div>
  )
}

export default RatioHelper;
