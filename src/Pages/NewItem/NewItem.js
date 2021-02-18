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
        <ItemForm>
          <input type="file"/>
          </ItemForm>
      </Content>
      <ButtonsContainer>
        <MainButton>
          ADD ITEM
        </MainButton>
      </ButtonsContainer>
    </>
  );
};

export default NewItem;