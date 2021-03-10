import React, { useEffect, useState, useCallback, useContext } from 'react';

import Layout from '../../Elements/Layout/Layout';
import Outfit from '../../Elements/Outfit/Outfit';
import { AuthContext } from '../../context/auth-context';
import { useHttpClient } from '../../Util/http-hook';

import classes from './LatestSetsPage.Module.css';

const LatestSetsPage = () => {
  const [loadedSets, setLoadedSets] = useState();
  const [setsForDisplay, setSetsForDisplay] = useState([]);
  const { isLoading, error, sendRequest, resetError } = useHttpClient();
  const auth = useContext(AuthContext);

  const fetchSets = useCallback(async () => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/clothes/all/latestsets`,
        'GET',
        null,
        { Authorization: 'Bearer ' + auth.token }
      );
      setLoadedSets(responseData.sets);
    } catch (err) {}
  });

  useEffect(() => {
    fetchSets();
  }, []);

  const fetchItem = async (itemId) => {
    let item;
    try {
      const data = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/clothes/item/${itemId}`,
        'GET',
        null,
        { Authorization: 'Bearer ' + auth.token }
      );
      item = data.item;
      return item;
    } catch (err) {}
  };

  useEffect(() => {
    if (loadedSets) {
      setTimeout(() => {
        const fetchinSets = async () => {
          for (let set of loadedSets) {
            const ids = [set.level1, set.level2, set.level3];
            const items = [];
            for (let id of ids) {
              const fetchedItem = await fetchItem(id);
              items.push(fetchedItem);
            }
            setSetsForDisplay((prevState) => [...prevState, items]);
          }
        };
        fetchinSets();
      }, 0);
    }
  }, [loadedSets]);

  return (
    <Layout>
      <div className={classes.SetsContainer}>
        {setsForDisplay &&
          setsForDisplay.map((set) => (
            <>
              <div className={classes.Wrapper}>
                <Outfit
                  getRandomItem={() => {}}
                  itemLevel1={set[0]}
                  itemLevel2={set[1]}
                  itemLevel3={set[2]}
                />
              </div>
            </>
          ))}
      </div>
    </Layout>
  );
};

export default LatestSetsPage;