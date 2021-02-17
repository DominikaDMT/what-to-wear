import React, { useContext } from 'react';
import  {Link} from 'react-router-dom'

import {AuthContext} from '../../context/auth-context'

import classes from './StartingPage.Module.css'

const StartingPage = () => {

  const auth = useContext(AuthContext);

  return (  
    <div className={classes.StartingPage}>
      <h1 className={classes.Logo}>What to Wear?</h1>
      <div className={classes.Hint}>
        <div><p><i className="fas fa-dice-three"></i> WYLOSUJ</p></div>
        <p>lub</p>
        <div><p className={classes.Arrow}><i className="fas fa-mouse-pointer" ></i> WYBIERZ</p></div>
        <p>i</p>
        <div><p className={classes.Wide}><i className="far fa-check-square" ></i> ZATWIERDŹ!</p></div>
      </div>
      <Link to={auth.isLoggedIn ? '/mainPage' : '/auth'}>
        <button className={classes.RoundBtn}><i className="fas fa-arrow-right"></i></button>
      </Link>
    </div>
  );
}

export default StartingPage;