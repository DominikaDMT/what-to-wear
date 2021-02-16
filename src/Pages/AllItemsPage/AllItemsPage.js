import React from 'react';
import { Link } from 'react-router-dom'
import Content from '../../Elements/Content/Content';

import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';

import classes from './AllItemsPage.Module.css';
import MainButton from '../../Elements/MainButton/MainButton.';
import ItemThumbnail from '../ItemThumbnail/ItemThumbnail';

const AllItemsPage = () => {


  const ITEMS = [{
    id: 1,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 2,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 3,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 4,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 5,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 6,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 7,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 8,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 9,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 10,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 11,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 12,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 13,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 14,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },{
    id: 15,
    name: 'bluzka',
    color: 'czarna',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZQPPICAGwol8jtic7wP8f_dh7Z5CK57jMtUCUT4_zpfHmPtZAvsam3pXhp9FWv1edVkDx3E&usqp=CAc'
  },
]

const itemsList = ITEMS.map(item => <ItemThumbnail key= {item.id} id={item.id} name={item.name} color={item.color} image={item.image}/> )


  return (
    <>
      <Content>
        <div className={classes.Container}>
          {itemsList}
        </div>
      </Content>
      <ButtonsContainer>
        <Link to='/item/new'>
        <MainButton>
          <p>ADD NEW ITEM</p>
        </MainButton>
        </Link>
      </ButtonsContainer>
    </>
  );
};

export default AllItemsPage;
