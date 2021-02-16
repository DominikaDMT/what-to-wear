import React from 'react';
import ReactDOM from 'react-dom';

import classes from './SideDrawer.Module.css';

const SideDrawer = (props) => {

  const content = (
    <>
      <aside className={classes.SideDrawer}>{props.children}</aside>
      <div className={classes.Backdrop} onClick={props.closeSideDrawer}>
      </div>
    </>
  )
  return ReactDOM.createPortal(
    content, document.getElementById('drawer')
  );
};

export default SideDrawer;
