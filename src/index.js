import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { FirebaseContext } from './store/context';
import { firebase} from './firebase/config'
ReactDOM.render(
  <BrowserRouter> 
  <FirebaseContext.Provider value={{firebase}} >
    <App />
  </FirebaseContext.Provider>
    </BrowserRouter>
,
  document.getElementById('root')
);

