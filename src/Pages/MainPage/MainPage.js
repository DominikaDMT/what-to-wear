import React from 'react';

import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';
import Content from '../../Elements/Content/Content';
import MainButton from '../../Elements/MainButton/MainButton.';

import classes from './MainPage.Module.css';

const MainPage = () => {
  return (
    <>
      <Content>
        <div className={classes.Outfit}>
          <div className={classes.Level1}></div>
          <div className={classes.Level2}></div>
          <div className={classes.Level3}></div>
        </div>
      </Content>
      <ButtonsContainer>
        <button className={classes.SmallButton}>
          <i className='fas fa-mouse-pointer'></i>
        </button>
        <MainButton>
          <p>LOSUJ</p>
          <p>GOTOWY ZESTAW</p>
        </MainButton>
        <button className={classes.SmallButton}>
          <i className='fas fa-check'></i>
        </button>
      </ButtonsContainer>
    </>
  );
};

export default MainPage;