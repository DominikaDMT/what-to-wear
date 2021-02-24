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
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi veniam consequatur dolores impedit inventore possimus quia voluptatum sint error, obcaecati nulla, deleniti veritatis similique sequi velit corporis provident. Enim facilis quo amet a, assumenda delectus quis fugiat id! Totam quam in enim eos! Animi ex dolore vero in? Quas. */}
      </div>
      <section className={classes.ButtonsContainer}>
        {props.buttons}
      </section>
    </div>
  );
};

export default Layout;
