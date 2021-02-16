import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import './App.css';

import MainPage from './Pages/MainPage/MainPage';
import NewItem from './Pages/NewItem/NewItem';
import StartingPage from './Pages/StartingPage/StartingPage';
import UserPage from './Pages/UserPage/UserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={StartingPage} />
        <Route path='/mainPage'>
          <MainPage />
        </Route>
        <Route path='/item/new' component={NewItem} />
        <Route path='/user' component={UserPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;