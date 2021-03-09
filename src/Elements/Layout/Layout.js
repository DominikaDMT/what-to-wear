import React from 'react';

import classes from './Layout.Module.css';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
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
