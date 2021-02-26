import React from 'react';
import { Link } from 'react-router-dom';
import path from 'path';

import classes from './ItemThumbnail.Module.css';

const ItemThumbnail = (props) => {

  let source = props.image ? props.image : props.imageURL;

  return (
    <div className={classes.ItemThumbnail}>
    <Link to={`/item/${props.id}`}>
      {props.image && <img src={`data:image/jpg;base64,${(source)}`} alt={props.name} />}
      {props.imageURL && <img src={source} alt={props.name} />}
    </Link>
    </div>
  );
};
export default ItemThumbnail;