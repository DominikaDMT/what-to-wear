import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import AllItemsPage from './Pages/AllItemsPage/AllItemsPage';
import Auth from './Pages/Auth/Auth';
import LatestSetsPage from './Pages/LatestSetsPage/LatestSetsPage';
import MainPage from './Pages/MainPage/MainPage';
import StartingPage from './Pages/StartingPage/StartingPage';

import Layout from './Elements/Layout/Layout';
import LoadingSpinner from './Elements/LoadingSpinner/LoadingSpinner';
import Modal from './Elements/Modal/Modal';
import NavBar from './Elements/NavBar/NavBar';

import { AuthContext } from './context/auth-context';
import useAuth from './Util/auth-hook';

import './App.css';

const ItemPage = lazy(() => import('./Pages/ItemPage/ItemPage'));
const NewItem = lazy(() => import('./Pages/NewItem/NewItem'));
const UserPage = lazy(() => import('./Pages/UserPage/UserPage'));

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <>
        <NavBar />
        <Route path='/' exact component={MainPage} />
        <Suspense fallback={ <Layout><LoadingSpinner/></Layout> }>
          <Switch>
            <Route path='/mainPage' component={MainPage} />
            <Route path='/user' component={UserPage} />
            <Route path='/item/all' exact component={AllItemsPage} />
            <Route path='/item/all/latest-sets' component={LatestSetsPage} />
            <Route path='/item/new' component={NewItem} />
            <Route path='/item/:itemid' component={ItemPage} />
            <Redirect to='/mainPage' />
          </Switch>
        </Suspense>
      </>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact component={StartingPage} />
        <Route path='/auth' >
          <NavBar/>
          <Auth/>
        </Route>
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
