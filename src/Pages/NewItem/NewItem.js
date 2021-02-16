import React from 'react';

import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';
import Content from '../../Elements/Content/Content';
import ItemForm from '../../Elements/ItemForm/ItemForm';
import MainButton from '../../Elements/MainButton/MainButton.';

import classes from './NewItem.Module.css';

const NewItem = () => {
  return (
    <>
      <Content>
        <div className={classes.Photo}></div>
        <ItemForm/>
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