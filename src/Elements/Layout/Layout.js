import React from 'react';
import NavBar from '../NavBar/NavBar';

import classes from './Layout.Module.css';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <nav className={classes.Nav}>
        <NavBar />
      </nav>

      <div className={classes.Content}>
        {props.children}
      </div>
      <section className={classes.ButtonsContainer}>
        {props.buttons}
      </section>
    </div>
  );
};

export default Layout;
