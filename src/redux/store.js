import { configureStore } from '@reduxjs/toolkit';

import authReducers from '../redux/auth/auth-reducer';

let store = configureStore({
  reducer: {
    auth: authReducers,
  },
});

export default store;
