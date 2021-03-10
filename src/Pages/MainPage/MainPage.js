import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/auth-context';

import Layout from '../../Elements/Layout/Layout';
import LoadingSpinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import MainButton from '../../Elements/MainButton/MainButton.';
import Outfit from '../../Elements/Outfit/Outfit';
import { useHttpClient } from '../../Util/http-hook';

import classes from './MainPage.Module.css';

const MainPage = () => {
  const { isLoading, error, sendRequest, resetError } = useHttpClient();
  const [itemLevel1, setItemLevel1] = useState({image: '', imageURL: ''});
  const [itemLevel2, setItemLevel2] = useState({image: '', imageURL: ''});
  const [itemLevel3, setItemLevel3] = useState({image: '', imageURL: ''});
  let auth = useContext(AuthContext);
  const userId = auth.userId;
  const divLevel1 = useRef()
  const divLevel2 = useRef()
  const divLevel3 = useRef()

  useEffect(() => {
    if (auth.userId) {
      getRandomOutfit();
    }
  }, [])

  let randomItem;

  const getRandomItem = async (lvl) => {
    try {
      randomItem = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/clothes/item/random`,
        'POST',
        JSON.stringify({
          level: lvl,
          creatorId: userId,
        }),
        { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth.token}
      );
      if (lvl === 1) {
        setItemLevel1({image: randomItem.item.image, imageURL: randomItem.item.imageURL, id: randomItem.item.id})
      } else if (lvl === 2) {
        setItemLevel2({image: randomItem.item.image, imageURL: randomItem.item.imageURL, id: randomItem.item.id})
      } else if (lvl === 3) {
        setItemLevel3({image: randomItem.item.image, imageURL: randomItem.item.imageURL, id: randomItem.item.id})
      }
    } catch (err) {}
  };

  const getRandomOutfit = () => {
    divLevel1.current.click();
    divLevel2.current.click();
    divLevel3.current.click();
  }

  const saveSet = async () => {
    try {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/clothes/newset`, 'POST', JSON.stringify({
        date: new Date().getTime(),
        level1: itemLevel1.id,
        level2: itemLevel2.id,
        level3: itemLevel3.id,
      }),
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth.token,
      }
    );
  } catch (err) {}
};

  return (
    <>
      <Layout
        buttons={
          <>
            <button className={classes.SmallButton}>
              <i className='fas fa-mouse-pointer'></i>
            </button>
            <MainButton forwardedP={true} onClick={getRandomOutfit}>
              <p>LOSUJ</p>
              <p>GOTOWY ZESTAW</p>
            </MainButton>
            <button className={classes.SmallButton} onClick={saveSet}>
              <i className='fas fa-check'></i>
            </button>
          </>
        }
      >
        {/* {isLoading && <LoadingSpinner/>} */}
        <Outfit
          getRandomItem={getRandomItem}
          itemLevel1={itemLevel1}
          itemLevel2={itemLevel2}
          itemLevel3={itemLevel3}
          divLevel1={divLevel1}
          divLevel2={divLevel2}
          divLevel3={divLevel3}
        />
      </Layout>
    </>
  );
};

export default MainPage;