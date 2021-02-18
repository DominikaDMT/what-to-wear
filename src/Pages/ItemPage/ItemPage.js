import React from 'react';
import { useParams } from 'react-router-dom';

import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';
import Content from '../../Elements/Content/Content';
import MainButton from '../../Elements/MainButton/MainButton.';
import SecondaryButton from '../../Elements/SecondaryButton/SecondaryButton';

import classes from './ItemPage.Module.css';

const ItemPage = (props) => {
  const ITEM = {
    id: 456,
    name: 'bluzka',
    color: 'czarna',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc',
  };

  const itemId = useParams().itemid;

  return (
    <>
      <Content>
        <div className={classes.ItemPicture}><img src={ITEM.image} alt={ITEM.name} /></div>
        <div className={classes.Info}>
        <p className={classes.Name}>Name: <strong>{ITEM.name}</strong></p>
        <p className={classes.Name}>Color: <strong>{ITEM.color}</strong></p>
        <p className={classes.Name}>Id: <strong>{itemId}</strong></p>
        </div>
        <SecondaryButton to={`/item/edit/${itemId}`}>
          Edit item
        </SecondaryButton>
      </Content>
      <ButtonsContainer>
          <MainButton to='/item/all'>
            GO BACK
          </MainButton>
      </ButtonsContainer>
    </>
  );
};

export default ItemPage;