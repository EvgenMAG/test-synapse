import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './contacts-actions';

import data from '../../DB/imdb.json';

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

export { getContacts };
