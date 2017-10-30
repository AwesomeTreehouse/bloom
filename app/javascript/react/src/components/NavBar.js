import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton.js'

const NavBar = props => {
  return(
    <div>
      <Link to='/'> </Link>
      <h1 className="title">bloom</h1>
      {props.children}
    </div>
  )
}

export default NavBar;
