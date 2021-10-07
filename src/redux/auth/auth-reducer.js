import {
  userLoginSuccess,
  userLoginError,
  userRegisterSuccess,
  userRegisterError,
  userLogoutSuccess,
  userLogoutError,
  userRegisterResume,
} from './auth-actions';

import { createReducer, combineReducers } from '@reduxjs/toolkit';

const initialState = '';

const userReducer = createReducer(initialState, {
  [userRegisterSuccess]: (_, { payload }) => payload,
  // [userLoginSuccess]: (_, { payload }) => payload.user,
  [userLogoutSuccess]: (_, __) => initialState,
});

const isAutorizedReducer = createReducer(false, {
  [userRegisterSuccess]: () => true,
  [userLoginSuccess]: () => true,
  [userLoginError]: () => false,
  [userLogoutSuccess]: () => false,
  [userRegisterError]: () => false,
});

const setError = (_, { payload }) => payload;

const regResume = createReducer(false, {
  [userRegisterResume]: () => true,
});

const errorReducers = createReducer(null, {
  [userRegisterError]: setError,
  [userLoginError]: setError,
  [userLogoutError]: setError,
});

const authReducers = combineReducers({
  user: userReducer,
  isAutorized: isAutorizedReducer,
  errors: errorReducers,
  registration: regResume,
});

export default authReducers;
