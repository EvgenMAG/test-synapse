import { createAction } from '@reduxjs/toolkit';

const userRegisterRequest = createAction('auth/userRegisterRequest');
const userRegisterSuccess = createAction('auth/userRegisterSuccess');
const userRegisterError = createAction('auth/userRegisterError');

const userLoginRequest = createAction('auth/userLoginRequest');
const userLoginSuccess = createAction('auth/userLoginSuccess');
const userLoginError = createAction('auth/userLoginError');

const userLogoutRequest = createAction('auth/userLogoutRequest');
const userLogoutSuccess = createAction('auth/userLogoutSuccess');
const userLogoutError = createAction('auth/userLogoutError');

const userRegisterResume = createAction('auth/userRegisterResume');

export {
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
  userLogoutRequest,
  userLogoutSuccess,
  userLogoutError,
  userRegisterResume,
};
