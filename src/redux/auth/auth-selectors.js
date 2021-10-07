const getIsAuthenticated = state => state.auth.isAutorized;

const getUsername = state => state.auth.user;

const getRegistrationStatus = state => state.auth.registration;

export { getIsAuthenticated, getUsername, getRegistrationStatus };
