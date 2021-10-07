import axios from 'axios';

import {
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
} from './auth-actions';

const registerUser = credentials => async dispatch => {
  dispatch(userRegisterRequest());
  console.log(credentials);

  try {
    dispatch(userRegisterSuccess(credentials));
  } catch (error) {
    dispatch(userRegisterError(error.message));
  }
};

const LoginUser = credentials => async dispatch => {
  dispatch(userLoginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    dispatch(userLoginSuccess(data));
  } catch (error) {
    dispatch(userLoginError(error.message));
  }
};

const LogoutUser = () => async dispatch => {
  dispatch(userLogoutRequest());

  try {
    dispatch(userLogoutSuccess());
  } catch (error) {
    dispatch(userLogoutError(error.message));
  }
};

const ResumeRegister = () => async dispatch => {
  dispatch(userRegisterResume());
};

export { registerUser, LoginUser, LogoutUser, ResumeRegister };