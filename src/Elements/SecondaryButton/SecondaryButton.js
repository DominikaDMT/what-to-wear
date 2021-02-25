import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SecondaryButton.Module.css';

const SecondaryButton = (props) => {

  let buttonContent;
  if (props.to) {
    buttonContent = <Link to={props.to}><p>{props.children}</p></Link>
  } else {
    buttonContent = <p>{props.children}</p>
  }

  return (
    <button className={classes.SecondaryButton} onClick={props.onClick} style={props.style}>
      {buttonContent}
    </button>
  );
};

export default SecondaryButton;