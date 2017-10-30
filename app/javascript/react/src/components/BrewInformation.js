import React from 'react';

const BrewInformation = props => {
  return(
    <div>
      <h4>Tool:</h4>
        <form className={props.className}>
          <input
            type='text'
            placeholder='ratio'
          />
        </form>

      <h4>Beans:</h4>
        <form className={props.className}>
          <input
            type='text'
            placeholder='ratio'
          />
        </form>

      <h4>Grind:</h4>
        <form className={props.className}>
          <input
            type='text'
            placeholder='ratio'
          />
        </form>
    </div>
  )
}

export default BrewInformation;
