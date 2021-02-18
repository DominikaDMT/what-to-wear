import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SecondaryButton.Module.css';

const SecondaryButton = (props) => {
  return (
    <button className={classes.SecondaryButton} onClick={props.onClick}>
      <Link to={props.to}>
        <p>
          {props.children}
        </p>
      </Link>
    </button>
  );
};

export default SecondaryButton;