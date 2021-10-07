import { createAction } from '@reduxjs/toolkit';

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsError = createAction('contacts/getContactsError');

export { getContactsRequest, getContactsSuccess, getContactsError };
