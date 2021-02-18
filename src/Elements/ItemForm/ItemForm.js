import React, { useState } from 'react';

import SecondaryButton from '../SecondaryButton/SecondaryButton';

import classes from './ItemForm.Module.css';

const ItemForm = (props) => {

  const [selectValue, setSelectValue] = useState('')

  const changeSelectValueHandler = (e) => {
    setSelectValue(e.target.value);
  }


  return (
    <>
      <div className={classes.PhotoContainer}> {props.children}</div>
      <form className={classes.ItemForm}>
        <div className={classes.Row}>
          <p className={classes.Title}>Select color of an item:</p>
          <select
            className={classes.Select}
            name='colors'
            id='colors'
            value={selectValue || props.selectValue}
            onChange={changeSelectValueHandler}
          >
            <optgroup label='Mixed'>
              <option value='multi'>multicolor</option>
              <option value='bw'>black {'&'} white</option>
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
        </div>
        <div className={classes.Row}>
          <p className={classes.Title}>Select type of an item:</p>
          <div className={classes.Description}>
            <label>
              <input type='radio' name='level1' id='' /> t-shirt / shirt /
              blouse
            </label>
            <label>
              <input type='radio' name='level1' id='' /> trousers / skirt
            </label>
            <label>
              <input type='radio' name='level1' id='' /> shoes
            </label>
          </div>
        </div>
        <SecondaryButton>Select matching outfits</SecondaryButton>
      </form>
    </>
  );
};

export default ItemForm;
