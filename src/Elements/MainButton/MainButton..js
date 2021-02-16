import React from 'react';

import classes from './MainButton.Module.css';

const MainButton = (props) => {
  return (  
    <button className={classes.Button}>
      {props.children}
    </button>
  );
}

export default MainButton;