import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div>
      <Link to='/'><h2 className="title">bloom</h2></Link>
      {props.children}
    </div>
  )
}

export default NavBar;
