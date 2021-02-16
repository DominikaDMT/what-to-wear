import React from 'react';

import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';
import Content from '../../Elements/Content/Content';
import MainButton from '../../Elements/MainButton/MainButton.';
import NavBar from '../../Elements/NavBar/NavBar';

import classes from './NewItem.Module.css';

const NewItem = () => {
  return (
    <>
      <NavBar />
      <Content>
        <div className={classes.Photo}></div>
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