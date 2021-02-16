import React from 'react';

import classes from './NavBar.Module.css';

const NavBar = () => {
  return (
    <nav className={classes.Navigation}>
      <i className='fas fa-bars'></i>
      <h2 className={classes.Logo}>What to Wear?</h2>
      <div></div>
    </nav>
  );
};

export default NavBar;