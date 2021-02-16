import React from 'react';

import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';
import Content from '../../Elements/Content/Content';
import MainButton from '../../Elements/MainButton/MainButton.';

import classes from './NewItem.Module.css';

const NewItem = () => {
  return (
    <>
      <Content>
        <div className={classes.Photo}></div>
        
        <p className={classes.Title}>Jaki kolor przeważa?</p>
        <select name='colors' id='colors'>
          <optgroup label='Mieszane'>
            <option value='bw'>czarno-biały</option>
            <option value='multi'>wielokolorowy</option>
          </optgroup>
          <optgroup label='Kolory'>
            <option value='red'>czarny</option>
            <option value='red'>szary</option>
            <option value='red'>biały</option>
            <option value='red'>czerwony</option>
            <option value='red'>niebieski</option>
            <option value='red'>zielony</option>
            <option value='red'>żółty</option>
            <option value='red'>pomarańczowy</option>
            <option value='red'>różowy</option>
            <option value='red'>beżowy</option>
          </optgroup>
        </select>
        <p className={classes.Title}>Jaki to typ ubrania?</p>
        <div className={classes.Description}>
          <label>
            <input type='radio' name='level1' id='' /> koszulka / bluzka / bluza
          </label>
          <label>
            <input type='radio' name='level1' id='' /> spodnie / spódniczka
          </label>
          <label>
            <input type='radio' name='level1' id='' /> buty
          </label>
        </div>
        <button className={classes.AddItem}>
          Wybierz do jakich ubrań pasuje
        </button>
      </Content>
      <ButtonsContainer>
        <MainButton>
          <p>DODAJ DO BAZY</p>
        </MainButton>
      </ButtonsContainer>
    </>
  );
};

export default NewItem;