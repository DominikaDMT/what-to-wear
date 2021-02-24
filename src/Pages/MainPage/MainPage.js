import React from 'react';

import Layout from '../../Elements/Layout/Layout';
import MainButton from '../../Elements/MainButton/MainButton.';

import classes from './MainPage.Module.css';

const MainPage = () => {
  return (
    <>
      <Layout
        buttons={
          <>
            <button className={classes.SmallButton}>
              <i className='fas fa-mouse-pointer'></i>
            </button>
            <MainButton forwardedP={true}>
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
          <div className={classes.Level1}></div>
          <div className={classes.Level2}></div>
          <div className={classes.Level3}></div>
        </div>
      </Layout>
    </>
  );
};

export default MainPage;