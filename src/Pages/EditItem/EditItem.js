import React from 'react';
import { useParams, Link } from 'react-router-dom';

import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';
import Content from '../../Elements/Content/Content';
import ItemForm from '../../Elements/ItemForm/ItemForm';
import MainButton from '../../Elements/MainButton/MainButton.';

import classes from './EditItem.Module.css';

const ITEMS = [
  {
    id: 1,
    name: 'shirt',
    color: 'black',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc',
  },
  {
    id: 2,
    name: 'shirt',
    color: 'blue',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc',
  },
  {
    id: 3,
    name: 'shirt',
    color: 'green',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc',
  },
  {
    id: 4,
    name: 'shirt',
    color: 'red',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc',
  },
  {
    id: 5,
    name: 'shirt',
    color: 'yellow',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc',
  },
];

const EditItem = () => {
  const itemId = +useParams().itemid;
  const editedItem = ITEMS.find((item) => item.id === itemId);

  return (
    <>
      <Content>
        <p className={classes.Paragraph}>
          Update item <strong>{itemId}</strong>
        </p>
        <div className={classes.Photo}>
          <img src={editedItem.image} alt={editedItem.name} />
        </div>

        <ItemForm selectValue={editedItem.color} />
      </Content>
      <ButtonsContainer>
        <Link to='/item/all'>
          <MainButton>
            <p>GO BACK</p>
          </MainButton>
        </Link>
      </ButtonsContainer>
    </>
  );
};

export default EditItem;