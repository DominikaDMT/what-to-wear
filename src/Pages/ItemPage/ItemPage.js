import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MainButton from '../../Elements/MainButton/MainButton.';
import SecondaryButton from '../../Elements/SecondaryButton/SecondaryButton';
import classes from './ItemPage.Module.css';
import { useHttpClient } from '../../Util/http-hook';
import Layout from '../../Elements/Layout/Layout';

const ItemPage = (props) => {
  const [item, setItem] = useState();
  const [fetchingitem, setFetchingitem] = useState(true);
  const itemId = useParams().itemid;
  const { isLoading, error, sendRequest, resetError } = useHttpClient();

  useEffect(() => {
    const fetchItem = async () => {
      if (fetchingitem) {
        try {
          const item = await sendRequest(
            `http://localhost:5000/api/clothes/item/${itemId}`
          );
          setItem(item.item);
        } catch (err) {}
      }
      setFetchingitem(false);
    };
    fetchItem();
  });

  return (
    <Layout buttons={<MainButton to='/item/all'>GO BACK</MainButton>}>
      {item && (
        <>
          <div className={classes.ItemPicture}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className={classes.Info}>
            <p className={classes.Name}>
              Name: <strong>{item.name}</strong>
            </p>
            <p className={classes.Name}>
              Color: <strong>{item.color}</strong>
            </p>
          </div>
          <SecondaryButton to={`/item/edit/${itemId}`}>
            Edit item
          </SecondaryButton>
        </>
      )}
    </Layout>
  );
};

export default ItemPage;
