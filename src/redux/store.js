import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contactReducers from '../redux/contacts/contacts-reducer';
import authReducers from '../redux/auth/auth-reducer';

const contactsReducer = combineReducers({
  items: contactReducers.itemsReducers,
  loading: contactReducers.loading,
});

let store = configureStore({
  reducer: {
    auth: authReducers,
    contacts: contactsReducer,
  },
});

export default store;
