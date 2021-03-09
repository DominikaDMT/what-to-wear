import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavLinks.Module.css';

import {AuthContext} from '../../context/auth-context'


const NavLinks = (props) => {

  const auth = useContext(AuthContext)

  return (
    <ul className={classes.LinksList}>
      {auth.isLoggedIn && <li>
      <NavLink activeClassName={classes.ActiveNavLink} to='/mainPage'>Main Page</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
      <NavLink activeClassName={classes.ActiveNavLink} to='/user'>My profile</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
      <NavLink activeClassName={classes.ActiveNavLink} to='/item/new'>Add item</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
      <NavLink activeClassName={classes.ActiveNavLink} to='/item/all'>All items</NavLink>
      </li>}
      {!auth.isLoggedIn && <li>
      <NavLink activeClassName={classes.ActiveNavLink} to='/auth'>Authenticate</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
        <button onClick={auth.logout} className={classes.LogoutBtn}>Logout</button>
      </li>}

    </ul>
  );
}

export default NavLinks;