import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import NavBar from './Elements/NavBar/NavBar';
import AllItemsPage from './Pages/AllItemsPage/AllItemsPage';

import MainPage from './Pages/MainPage/MainPage';
import NewItem from './Pages/NewItem/NewItem';
import StartingPage from './Pages/StartingPage/StartingPage';
import UserPage from './Pages/UserPage/UserPage';
import ItemPage from './Pages/ItemPage/ItemPage';

function App() {
  return (
    <Router>
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
          <AllItemsPage/>
        </Route>
        <Route path='/item/new'>
          <NavBar />
          <NewItem />
        </Route>
        <Route path='/item/:itemid'>
          <NavBar />
          <ItemPage/>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
