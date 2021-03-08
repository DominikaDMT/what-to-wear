import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';

import classes from './NavBar.Module.css';

const NavBar = () => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  const toggleSideDrawer = () => {
    setSideBarIsVisible(prevState => !prevState)
  }

  return (
    <>
      <SideDrawer closeSideDrawer={toggleSideDrawer} show={sideBarIsVisible}><NavLinks sideDrawer={true}/></SideDrawer>
      <nav className={classes.Navigation}>
        <div className={classes.Hamburger} onClick={toggleSideDrawer}>
          <i className='fas fa-bars'></i>
        </div>
        <Link to='/mainPage'>
          <h2 className={classes.Logo}>What to Wear?</h2>
        </Link>
        <div className={classes.NavLinksContainer}>
        <NavLinks/>
        </div>
        <div className={classes.InvisibleDiv}></div>
      </nav>
    </>
  );
};

export default NavBar;
