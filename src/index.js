import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router} from "react-router-dom";
import loginComponent from './login/login';
import signupComponent from './signup/signup';
import dashboardComponent from './dashboard/dashboard';

const firebase= require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyARh5feulFyuZ_-8wK2mgN2B5cnarlMzUA",
    authDomain: "chat-app-af6b1.firebaseapp.com",
    databaseURL: "https://chat-app-af6b1.firebaseio.com",
    projectId: "chat-app-af6b1",
    storageBucket: "chat-app-af6b1.appspot.com",
    messagingSenderId: "379077941574",
    appId: "1:379077941574:web:089659e40b85dfb64b6d47"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={loginComponent}></Route>
      <Route path="/signup" component={signupComponent}></Route>
      <Route path="/dashboard" component={dashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
