import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import classes from './SideDrawer.Module.css';

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={250}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <>
      <aside className={classes.SideDrawer} onClick={props.closeSideDrawer}>{props.children}</aside>
      <div className={classes.Backdrop} onClick={props.closeSideDrawer}></div>
      </>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById('drawer'));
};

export default SideDrawer;
