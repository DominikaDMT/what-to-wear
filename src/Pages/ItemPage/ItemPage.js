import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import ItemForm from '../../Elements/ItemForm/ItemForm';
import Layout from '../../Elements/Layout/Layout';
import LoadingSpinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import MainButton from '../../Elements/MainButton/MainButton.';
import Modal from '../../Elements/Modal/Modal';
import SecondaryButton from '../../Elements/SecondaryButton/SecondaryButton';
import useFormReducer from '../../Util/form-hook';
import { useHttpClient } from '../../Util/http-hook';

import classes from './ItemPage.Module.css';

const ItemPage = (props) => {
  const [fetchingitem, setFetchingitem] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [state, dispatch] = useFormReducer();
  const { isLoading, error, sendRequest, resetError } = useHttpClient();
  const history = useHistory();
  const auth = useContext(AuthContext);

  const itemId = useParams().itemid;
  useEffect(() => {
    const fetchItem = async () => {
      if (fetchingitem) {
        try {
          const data = await sendRequest(
            `http://localhost:5000/api/clothes/item/${itemId}`
          );
          const item = data.item;
          dispatch({
            type: 'state',
            payload: {
              id: item.id,
              color: item.color,
              brand: item.brand,
              name: item.name,
              level: item.level,
              image: item.image,
              imageURL: item.imageURL,
              creator: item.creator,
            },
          });
        } catch (err) {}
      }
      setFetchingitem(false);
    };
    fetchItem();
  }, [sendRequest, itemId]);

  const switchToEditModeHandler = () => {
    setIsEditMode(true);
  };

  const saveChangesHandler = async () => {
    try {
      await sendRequest(
        `http://localhost:5000/api/clothes/item/${itemId}`,
        'PATCH',
        JSON.stringify({
          ...state,
        }),
        { 'Content-Type': 'application/json' }
      );
      history.push('/item/all');
    } catch (err) {}
  };

  const deleteItemHandler = async () => {
    try {
      await sendRequest(
        `http://localhost:5000/api/clothes/item/${itemId}`,
        'DELETE'
      );
      history.push('/item/all');
    } catch (err) {}
    history.push('/item/all');

  };

  let content;
  if (state && isEditMode) {

    content = (
      <>
        <p className={classes.Paragraph}>Update item</p>
        <ItemForm item={state} dispatch={dispatch}>
          <div className={classes.ImagePreview} 
          style={state.imageURL ? {backgroundImage: "url('" + state.imageURL + "')"} : {}}>
            {state.image && <img src={`data:image/jpg;base64,${state.image}`} alt={state.name} />}
          </div>
        </ItemForm>
      </>
    );

  } else if (state && !isEditMode) {

    content = (
      <>
        <div className={classes.ImagePreviewNoEditMode} 
        style={state.imageURL ? {backgroundImage: "url('" + state.imageURL + "')"} : {}}>
          {state.image && <img src={`data:image/jpg;base64,${state.image}`} alt={state.name} />}
        </div>

        <div className={classes.Info}>
          <p className={classes.Name}>
            Description: <strong>{state.name}</strong>
          </p>
          <p className={classes.Name}>
            Brand: <strong>{state.brand}</strong>
          </p>
          <p className={classes.Name}>
            Color: <strong>{state.color}</strong>
          </p>
        </div>
        {state.creator === auth.userId && (
          <>
            <SecondaryButton onClick={switchToEditModeHandler}>
              Edit item
            </SecondaryButton>
            <SecondaryButton onClick={deleteItemHandler}>
              Delete item
            </SecondaryButton>
          </>
        )}
      </>
    );
  }


  let buttons;
  if (state && isEditMode) {
    buttons = (
      <MainButton onClick={saveChangesHandler}>SAVE CHANGES</MainButton>
    );
  } else if (state && !isEditMode) {
    buttons = <MainButton to='/item/all'>GO BACK</MainButton>
  }

  return (
    <Layout buttons={buttons}>
      {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
      {content}
    </Layout>
  );
};

export default ItemPage;
