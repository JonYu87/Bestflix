import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import * as APIUtil from './util/session_api_util'
import sessionReducer from './reducers/session_reducer'

document.addEventListener("DOMContentLoaded",() => {
  
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to Bestflix!</h1>, root)
  window.login = APIUtil.login
  window.signup = APIUtil.signup
  window.logout = APIUtil.logout
  window.sessionReducer = sessionReducer
});

