import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainButton.Module.css';

const MainButton = (props) => {
  
  let buttonContent;
  if (props.to) {
    if (props.forwardedP) {
      buttonContent = <Link to={props.to}>{props.children}</Link>
    } else {
      buttonContent = <Link to={props.to}><p>{props.children}</p></Link>
    }
  } else {
    if (props.forwardedP) {
      buttonContent = props.children
    } else {
      buttonContent = <p>{props.children}</p>
    }
  }

  return (
    <button className={classes.MainButton} disabled={props.disabled} onClick={props.onClick} disabled={props.disabled} >
      {buttonContent}
    </button>
  );
};

export default MainButton;
