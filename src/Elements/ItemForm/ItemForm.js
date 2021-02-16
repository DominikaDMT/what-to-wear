import React from 'react';

import classes from './ItemForm.Module.css';

const ItemForm = (props) => {
  return (
    <>
      <p className={classes.Title}>Select color of an item:</p>
      <select name='colors' id='colors' value={props.selectValue || ''}>
        <optgroup label='Mixed'>
          <option value='bw'>black {'&'} white</option>
          <option value='multi'>multicolor</option>
        </optgroup>
        <optgroup label='Colors'>
          <option value='black'>black</option>
          <option value='gray'>gray</option>
          <option value='white'>white</option>
          <option value='red'>red</option>
          <option value='blue'>blue</option>
          <option value='green'>green</option>
          <option value='yellow'>yellow</option>
          <option value='orange'>orange</option>
          <option value='pink'>pink</option>
          <option value='beige'>beige</option>
        </optgroup>
      </select>
      <p className={classes.Title}>Select type of an item:</p>
      <div className={classes.Description}>
        <label>
          <input type='radio' name='level1' id='' /> t-shirt / shirt / blouse
        </label>
        <label>
          <input type='radio' name='level1' id='' /> trousers / skirt
        </label>
        <label>
          <input type='radio' name='level1' id='' /> shoes
        </label>
      </div>
      <button className={classes.AddItem}>Select matching outfits</button>
    </>
  );
};

export default ItemForm;