import React from 'react';

import classes from './StartingPage.Module.css'


const StartingPage = () => {
  return (  
    <div className={classes.StartingPage}>
    <h1>What to Wear?</h1>
    <div className={classes.Hint}>
      {/* <p className={classes.Info}>?</p> */}
      <div><p><i class="fas fa-dice-three"></i> WYLOSUJ</p></div>
      <p>lub</p>
      <div><p className={classes.Arrow}><i class="fas fa-mouse-pointer" ></i> WYBIERZ</p></div>
      <p>i</p>
      <div><p className={classes.Wide}><i class="far fa-check-square" ></i> ZATWIERDŹ!</p></div>
    </div>
    <button className={classes.Round}><i className="fas fa-arrow-right"></i></button>
    </div>
  );
}

export default StartingPage;