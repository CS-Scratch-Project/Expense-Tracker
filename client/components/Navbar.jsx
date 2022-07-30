import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
  <nav id="navbar">
    <ul className='navlist'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/archive">Archive</Link>
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default Navbar