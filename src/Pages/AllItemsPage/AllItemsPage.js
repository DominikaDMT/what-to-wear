import React, { useContext, useEffect, useState } from 'react';

import ItemThumbnail from '../ItemThumbnail/ItemThumbnail';
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
          `http://localhost:5000/api/clothes/all/${userId}`
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
            />
          ))}
          {!isLoading && !loadedItems && <p>Add items to your collection</p> }
      </div>
    </Layout>
  );
};

export default AllItemsPage;
