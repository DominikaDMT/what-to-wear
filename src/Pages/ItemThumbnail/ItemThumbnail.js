import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ItemThumbnail.Module.css';

const ItemThumbnail = (props) => {
  return (
    <div className={classes.ItemThumbnail}>
    <Link to={`/item/${props.id}`}>
      <img src={props.image || props.imageURL} alt={props.name} />
    </Link>
    </div>
  );
};
export default ItemThumbnail;
