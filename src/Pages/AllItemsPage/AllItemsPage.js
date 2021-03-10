import React, { useCallback, useContext, useEffect, useState } from 'react';

import ItemThumbnail from '../../Elements/ItemThumbnail/ItemThumbnail';
import Layout from '../../Elements/Layout/Layout';
import LoadingSpinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import MainButton from '../../Elements/MainButton/MainButton.';
import Modal from '../../Elements/Modal/Modal';
import { useHttpClient } from '../../Util/http-hook';
import { AuthContext } from '../../context/auth-context';

import classes from './AllItemsPage.Module.css';

const AllItemsPage = () => {
  const [loadedItems, setLoadedItems] = useState({ 1: null, 2: null, 3: null });
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const { isLoading, error, sendRequest, resetError } = useHttpClient();
  const auth = useContext(AuthContext);

  const userId = auth.userId;

  const fetchItems = useCallback(async (level) => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/clothes/all/${userId}-${level}`,
        'GET',
        null,
        { 'Authorization': 'Bearer ' + auth.token }
      );
      setLoadedItems((state) => ({
        ...state,
        [level]: responseData.allItems,
      }));
    } catch (err) {}
  });

  useEffect(() => {
    for (let item in loadedItems) {
      fetchItems(item);
    }
  }, []);

  useEffect(() => {
    if (loadedItems[1] && loadedItems[2] && loadedItems[3]) {
      setAllItemsLoaded(true);
    }
  }, [loadedItems[1], loadedItems[2], loadedItems[3]]);

  const renderThumbnails = (level) => {
    const thumbnails = loadedItems[level].map((item) => (
      <ItemThumbnail
        key={item.id}
        id={item.id}
        name={item.name}
        color={item.color}
        image={item.image}
        imageURL={item.imageURL}
      />
    ));
    return thumbnails;
  };

  return (
    <Layout buttons={<MainButton to='/item/new'>ADD NEW ITEM</MainButton>}>
      {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && allItemsLoaded && <div className={classes.Container}>
          {/* <p className={classes.Title}>Tops:</p> */}
          {renderThumbnails(1)}
          {/* <p className={classes.Title}>Trousers and skirts:</p> */}
          {renderThumbnails(2)}
          {/* <p className={classes.Title}>Shoes:</p> */}
          {renderThumbnails(3)}

          {!isLoading && !loadedItems && <p>Add items to your collection</p>}
        </div>
      }
    </Layout>
  );
};

export default AllItemsPage;