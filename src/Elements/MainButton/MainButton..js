import React from 'react';

import classes from './MainButton.Module.css';

const MainButton = (props) => {
  return (  
    <button className={classes.Button} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default MainButton;