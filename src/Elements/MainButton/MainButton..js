import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainButton.Module.css';

const MainButton = (props) => {
  
  let buttonContent;
  if (props.forwardedP) {
    buttonContent = props.children
  } else {
    buttonContent = <p>{props.children}</p>
  }

  return (
    <button
      className={classes.MainButton}
      disabled={props.disabled}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Link to={props.to}>
        {buttonContent}
      </Link>
    </button>
  );
};

export default MainButton;
