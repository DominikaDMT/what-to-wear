import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemForm from '../../Elements/ItemForm/ItemForm';
import Layout from '../../Elements/Layout/Layout';
import MainButton from '../../Elements/MainButton/MainButton.';
import SecondaryButton from '../../Elements/SecondaryButton/SecondaryButton';
import useFormReducer from '../../Util/form-hook';
import { useHttpClient } from '../../Util/http-hook';

import classes from './ItemPage.Module.css';

const ItemPage = (props) => {
  const [fetchingitem, setFetchingitem] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [state, dispatch] = useFormReducer();
  const { isLoading, error, sendRequest, resetError } = useHttpClient();

  const itemId = useParams().itemid;

  useEffect(() => {
    const fetchItem = async () => {
      if (fetchingitem) {
        try {
          const item = await sendRequest(
            `http://localhost:5000/api/clothes/item/${itemId}`
          );
          dispatch({
            type: 'state',
            payload: {
              id: item.item.id,
              color: item.item.color,
              brand: item.item.brand,
              name: item.item.name,
              level: item.item.level,
              image: item.item.image,
            },
          });
        } catch (err) {}
      }
      setFetchingitem(false);
    };
    fetchItem();
  }, []);

  const switchToEditMode = () => {
    setIsEditMode(true);
  };

  let content;
  if (state && isEditMode) {
    content = (
      <>
        <p className={classes.Paragraph}>Update item</p>
        <ItemForm item={state} dispatch={dispatch}>
          <img src={state.image} alt={state.name} />
        </ItemForm>
      </>
    );
  } else if (state && !isEditMode) {
    content = (
      <>
        <div className={classes.ItemPicture}>
          <img src={state.image} alt={state.name} />
        </div>
        <div className={classes.Info}>
          <p className={classes.Name}>
            Name: <strong>{state.name}</strong>
          </p>
          <p className={classes.Name}>
            Color: <strong>{state.color}</strong>
          </p>
        </div>
        <SecondaryButton onClick={switchToEditMode}>Edit item</SecondaryButton>
      </>
    );
  }

  return (
    <Layout buttons={<MainButton to='/item/all'>GO BACK</MainButton>}>
      {content}
    </Layout>
  );
};

export default ItemPage;