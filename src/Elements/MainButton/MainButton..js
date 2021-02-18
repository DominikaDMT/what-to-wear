import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainButton.Module.css';

const MainButton = (props) => {
  return (  
    <button className={classes.MainButton} disabled={props.disabled} onClick={props.onClick} disabled={props.disabled}>
      <Link to={props.to}>
      <p>
      {props.children}
      </p>
      </Link>
    </button>
  );
}

export default MainButton;