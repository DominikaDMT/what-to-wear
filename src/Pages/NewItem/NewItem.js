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
import ImageUpload from '../../Elements/ImageUpload/ImageUpload';


const NewItem = () => {
  const auth = useContext(AuthContext);
  const [state, dispatch] = useFormReducer();
  const { isLoading, error, sendRequest, resetError } = useHttpClient();

  const history = useHistory();

  const addNewItem = async () => {
    try {

      const formData = new FormData();
      formData.append('name', state.name);
      formData.append('image', state.image);
      formData.append('imageURL', state.imageURL);
      formData.append('color', state.color);
      formData.append('level', state.level);
      formData.append('brand', state.brand);

      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/clothes/newitem`,
        'POST',
        // JSON.stringify({
        //   name: state.name,
        //   image: state.image,
        //   imageURL: state.imageURL,
        //   color: state.color,
        //   level: state.level,
        //   brand: state.brand,
        //   creator: auth.userId,
        // }),
        // { 'Content-Type': 'application/json' },
        formData,
        { 'Authorization': 'Bearer ' + auth.token },
        // { 'Content-Type': 'multipart/form-data' },
        // + automatycznie dodane nagłówki
      );
      history.push('/mainpage');
    } catch (err) {}
  };

  return (
    <Layout buttons={<MainButton onClick={addNewItem} disabled={!(state.color && state.level && (state.image || state.imageURL))}>ADD ITEM</MainButton>}>
      {error && <Modal closeModal={resetError}>{error}</Modal>}
      {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
      <ItemForm item={state} dispatch={dispatch} creating={true} >
        <ImageUpload dispatch={dispatch} newItem/>
      </ItemForm>
    </Layout>
  );
};

export default NewItem;