import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import AllItemsPage from './Pages/AllItemsPage/AllItemsPage';
import Auth from './Pages/Auth/Auth';
import ItemPage from './Pages/ItemPage/ItemPage';
import MainPage from './Pages/MainPage/MainPage';
import NewItem from './Pages/NewItem/NewItem';
import StartingPage from './Pages/StartingPage/StartingPage';
import UserPage from './Pages/UserPage/UserPage';
import { AuthContext } from './context/auth-context';
import useAuth from './Util/auth-hook';

import './App.css';
import Modal from './Elements/Modal/Modal';
import LoadingSpinner from './Elements/LoadingSpinner/LoadingSpinner';


function App() {
  const {token, login, logout, userId} = useAuth()
  
  let routes;

  if (token) {
    routes = (
      <>
        <Route path='/' exact component={MainPage} />
        <Switch>
          <Route path='/mainPage' component={MainPage} />
          <Route path='/user' component={UserPage} />
          <Route path='/item/all' component={AllItemsPage} />
          <Route path='/item/new' component={NewItem} />
          <Route path='/item/:itemid' component={ItemPage} />
          <Redirect to='/mainPage' />
        </Switch>
      </>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact component={StartingPage} />
        <Route path='/auth' component={Auth}/>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;
