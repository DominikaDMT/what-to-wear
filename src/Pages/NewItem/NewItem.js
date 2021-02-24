import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ItemForm from '../../Elements/ItemForm/ItemForm';
import MainButton from '../../Elements/MainButton/MainButton.';
import { useHttpClient } from '../../Util/http-hook';
import Modal from '../../Elements/Modal/Modal';
import LoadingSpinner from '../../Elements/LoadingSpinner/LoadingSpinner';

import { AuthContext } from '../../context/auth-context';

import classes from './NewItem.Module.css';
import Layout from '../../Elements/Layout/Layout';

const NewItem = () => {
  const [selectValue, setSelectValue] = useState('');
  const [radioValue, setRadioValue] = useState(0);
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, resetError } = useHttpClient();

  const changeSelectValueHandler = (e) => {
    setSelectValue(e.target.value);
  };
  const changeRadioValue = (e) => {
    setRadioValue(e.target.value);
  };

  const history = useHistory();

  const addNewItem = async () => {
    try {
      await sendRequest(
        'http://localhost:5000/api/clothes/newitem',
        'POST',
        JSON.stringify({
          name: 'there will be an name',
          image: 'there will be an image',
          color: selectValue,
          level: radioValue,
          brand: 'there will be a brand name',
          creator: auth.userId,
        }),
        { 'Content-Type': 'application/json' }
      );
      history.push('/mainpage');
    } catch (err) {}
  };

  return (
    <Layout
      buttons={
        <MainButton
          onClick={addNewItem}
          disabled={!(selectValue && radioValue)}
        >
          ADD ITEM
        </MainButton>
      }
    >
      {error && <Modal closeModal={resetError}>{error}</Modal>}
      {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
      <ItemForm
        changeSelectValueHandler={changeSelectValueHandler}
        changeRadioValue={changeRadioValue}
        selectValue={selectValue}
      >
        <input type='file' />
      </ItemForm>
    </Layout>
  );
};

export default NewItem;