import React, {useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ItemForm from '../../Elements/ItemForm/ItemForm';
import Layout from '../../Elements/Layout/Layout';
import LoadingSpinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import MainButton from '../../Elements/MainButton/MainButton.';
import Modal from '../../Elements/Modal/Modal';

import { AuthContext } from '../../context/auth-context';
import { useHttpClient } from '../../Util/http-hook';
import useFormReducer from '../../Util/form-hook';


const NewItem = () => {
  const auth = useContext(AuthContext);
  const [state, dispatch] = useFormReducer();
  const { isLoading, error, sendRequest, resetError } = useHttpClient();

  const history = useHistory();

  const addNewItem = async () => {
    try {
      await sendRequest(
        'http://localhost:5000/api/clothes/newitem',
        'POST',
        JSON.stringify({
          name: state.name,
          image: state.image,
          color: state.color,
          level: state.level,
          brand: state.brand,
          creator: auth.userId,
        }),
        { 'Content-Type': 'application/json' }
      );
      history.push('/mainpage');
    } catch (err) {}
  };

  return (
    <Layout buttons={<MainButton onClick={addNewItem} disabled={!(state.color, state.level)}>ADD ITEM</MainButton>}>
      {error && <Modal closeModal={resetError}>{error}</Modal>}
      {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
      <ItemForm item={state} dispatch={dispatch} creating={true}>
        <input type='file' />
      </ItemForm>
    </Layout>
  );
};

export default NewItem;