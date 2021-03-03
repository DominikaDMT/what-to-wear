import React, { useContext, useEffect, useState } from 'react';

import ItemThumbnail from '../../Elements/ItemThumbnail/ItemThumbnail';
import MainButton from '../../Elements/MainButton/MainButton.';
import { useHttpClient } from '../../Util/http-hook';
import Modal from '../../Elements/Modal/Modal';
import LoadingSpinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../context/auth-context';

import classes from './AllItemsPage.Module.css';
import Layout from '../../Elements/Layout/Layout';

const AllItemsPage = () => {
  const [loadedItems, setLoadedItems] = useState();
  const { isLoading, error, sendRequest, resetError } = useHttpClient();
  const auth = useContext(AuthContext);

  const userId = auth.userId;
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/clothes/all/${userId}`, 'GET', null, { 'Authorization': 'Bearer ' + auth.token }
        );
        setLoadedItems(responseData.allItems);
      } catch (err) {}
    };
    fetchItems();
  }, [sendRequest, userId]);

  let itemsList;
  useEffect(() => {
    if (loadedItems) {
      itemsList = loadedItems.map((item) => (
        <ItemThumbnail
          key={item.id}
          id={item.id}
          name={item.name}
          color={item.color}
          image={item.image}
          imageURL={item.imageURL}
        />
      ));
    }
  });

  return (
    <Layout buttons={<MainButton to='/item/new'>ADD NEW ITEM</MainButton>}>
      {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
      <div className={classes.Container}>
        {!isLoading &&
          loadedItems &&
          loadedItems.map((item) => (
            <ItemThumbnail
              key={item.id}
              id={item.id}
              name={item.name}
              color={item.color}
              image={item.image}
              imageURL={item.imageURL}
            />
          ))}
          {!isLoading && !loadedItems && <p>Add items to your collection</p> }
      </div>
    </Layout>
  );
};

export default AllItemsPage;
