import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavLinks.Module.css';

const NavLinks = () => {
  return (
    <ul className={classes.LinksList}>
      <li>
      <NavLink to='/mainPage'>Main Page</NavLink>
      </li>
      <li>
      <NavLink to='/user'>My profile</NavLink>
      </li>
      <li>
      <NavLink to='/item/new'>Add item</NavLink>
      </li>
      <li>
      <NavLink to='/auth'>Authenticate</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;