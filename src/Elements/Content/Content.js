import React from 'react';

import classes from './Content.Module.css';

const Content = (props) => {
  return <div className={classes.Content}>{props.children}</div>;
};

export default Content;