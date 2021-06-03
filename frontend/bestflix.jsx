import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded",() => {
  const store = configureStore();

  //For testing purposes
  window.login = APIUtil.login
  window.signup = APIUtil.signup
  window.logout = APIUtil.logout
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //End of testing, remember to delete after completion of feature

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
});

