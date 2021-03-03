import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/auth-context';

import Layout from '../../Elements/Layout/Layout';
import MainButton from '../../Elements/MainButton/MainButton.';
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
            <button className={classes.SmallButton}>
              <i className='fas fa-check'></i>
            </button>
          </>
        }
      >
        <div className={classes.Outfit}>
          <div className={classes.Level1} onClick={() => getRandomItem(1)} ref={divLevel1}
          style={itemLevel1.imageURL ? {backgroundImage: "url('" + itemLevel1.imageURL + "')"} : {}}>
          {itemLevel1.image && <img src={`data:image/jpg;base64,${itemLevel1.image}`}/>}
          </div>

          <div className={classes.Level2} onClick={() => getRandomItem(2)} ref={divLevel2}
          style={itemLevel2.imageURL ? {backgroundImage: "url('" + itemLevel2.imageURL + "')"} : {}}>
          {itemLevel2.image && <img src={`data:image/jpg;base64,${itemLevel2.image}`}/>}
          </div>

          <div className={classes.Level3} onClick={() => getRandomItem(3)} ref={divLevel3}
          style={itemLevel3.imageURL ? {backgroundImage: "url('" + itemLevel3.imageURL + "')"} : {}}>
          {itemLevel3.image && <img src={`data:image/jpg;base64,${itemLevel3.image}`}/>}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MainPage;