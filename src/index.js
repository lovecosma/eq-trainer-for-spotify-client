
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App'
import "./index.css"
// import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
import UserHome from './components/UserHome'
import "./App.css"
import Loading from "./components/Loading"
import LoginSuccess from './components/LoginSuccess'
import { connect } from 'react-redux'
import SideNav from "./components/SideNav"
import usersReducer from './reducers/usersReducer';
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
   <div>
      <Provider store={store}>
        <App/>
      </Provider>
   </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 