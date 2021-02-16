import React from 'react';

import classes from './ButtonsContainer.Module.css';

const ButtonsContainer = (props) => {
  return (
    <div className={classes.ButtonsContainer}>
      {props.children}
    </div>
  );
}

export default ButtonsContainer;