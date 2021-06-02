import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import * as SessionApi from './util/session_api_util'

document.addEventListener("DOMContentLoaded",() => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to Bestflix!</h1>, root)
  window.login = SessionApi.login
  window.signup = SessionApi.signup
  window.logout = SessionApi.logout
});

