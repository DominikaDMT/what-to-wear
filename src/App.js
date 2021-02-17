import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import AllItemsPage from './Pages/AllItemsPage/AllItemsPage';
import Auth from './Pages/Auth/Auth';
import EditItem from './Pages/EditItem/EditItem';
import ItemPage from './Pages/ItemPage/ItemPage';
import MainPage from './Pages/MainPage/MainPage';
import NavBar from './Elements/NavBar/NavBar';
import NewItem from './Pages/NewItem/NewItem';
import StartingPage from './Pages/StartingPage/StartingPage';
import UserPage from './Pages/UserPage/UserPage';
import { AuthContext } from './context/auth-context';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' exact component={StartingPage} />
        <Route path='/mainPage'>
          <NavBar />
          <MainPage />
        </Route>
        <Route path='/user'>
          <NavBar />
          <UserPage />
        </Route>
        <Route path='/item/all'>
          <NavBar />
          <AllItemsPage />
        </Route>
        <Route path='/item/new'>
          <NavBar />
          <NewItem />
        </Route>
        <Route path='/item/edit/:itemid'>
          <NavBar />
          <EditItem />
        </Route>
        <Route path='/item/:itemid'>
          <NavBar />
          <ItemPage />
        </Route>
        <Redirect to='/mainPage' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact component={StartingPage} />
        <Route path='/auth'>
          <NavBar />
          <Auth />
        </Route>
        <Redirect to='/auth' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;
