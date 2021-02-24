import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemForm from '../../Elements/ItemForm/ItemForm';
import Layout from '../../Elements/Layout/Layout';
import MainButton from '../../Elements/MainButton/MainButton.';
import { useHttpClient } from '../../Util/http-hook';

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
  const itemId = useParams().itemid;
  // const editedItem = ITEMS.find((item) => item.id === itemId);
  const [item, setItem] = useState();
  const { isLoading, error, sendRequest, resetError } = useHttpClient();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const item = await sendRequest(
          `http://localhost:5000/api/clothes/item/${itemId}`
        );
        setItem(item.item);
      } catch (err) {}
    };
    fetchItem();
  }, []);

  return (
    <Layout buttons={<MainButton to='/item/all'>GO BACK</MainButton>}>
      {item && (
        <>
          <p className={classes.Paragraph}>Update item</p>
          <ItemForm selectValue={item.color} setRadioValue={item.level}>
            <img src={item.image} alt={item.name} />
          </ItemForm>
        </>
      )}
    </Layout>
  );
};

export default EditItem;
