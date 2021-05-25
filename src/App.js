import {useEffect, useState, useContext, Fragment} from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import {FirebaseContext} from './store/context';
import PostContext from './store/PostContext';
import Context from './store/context';
/**
 * ?  =====Import Components=====
 */
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ViewPost from './Pages/ViewPost';
import Create from './Pages/Create';

function App() {
  return (
    <div>
      <Context>
        <PostContext>
          <Fragment>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/view">
              <ViewPost />
            </Route>
          </Fragment>
        </PostContext>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Context>
    </div>
  );
}

export default App;
