import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './contacts-actions';

import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

const itemsReducers = createReducer(initialState, {
  [getContactsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});

const reducers = { itemsReducers, loading };

export default reducers;
