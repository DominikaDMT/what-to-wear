import React from 'react';

import classes from './MainPage.Module.css';

const MainPage = () => {
  return (
    <>
      <nav className={classes.Navigation}>
        <i className='fas fa-bars'></i>
        <h2 className={classes.Logo}>What to Wear?</h2>
        <div></div>
      </nav>
      <div className={classes.Content}>
        <div className={classes.Outfit}>
          <div className={classes.Level1}></div>
          <div className={classes.Level2}></div>
          <div className={classes.Level3}></div>
        </div>
      </div>
      <div className={classes.Buttons}>
        <button className={classes.SelectButton}>
          <i class='fas fa-mouse-pointer'></i>
        </button>
        <button className={classes.WholeSetButton}>
          <p>LOSUJ</p>
          <p>GOTOWY ZESTAW</p>
        </button>
        <button className={classes.AcceptButton}>
        <i class="fas fa-check"></i>
        </button>
      </div>
    </>
  );
};

export default MainPage;
