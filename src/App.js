import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import routes from './routes';

import AppBar from './components/AllNavigation/AppBar';
import Load from './components/Loader/Loader';
import PrivateRoute from './/components/AllNavigation/PrivateRoute';
import PublicRoute from './/components/AllNavigation/PublicRoute';

import MainContainer from './components/StyledComponents/MainContainer';

const HomePage = lazy(() => import('./views/HomePage'));
const Register = lazy(() => import('./views/RegisterView'));
const Login = lazy(() => import('./views/LoginView'));
const FilmsPage = lazy(() => import('./views/FilmsPage'));

export default function App() {
  return (
    <MainContainer>
      <AppBar />
      <Suspense fallback={Load()}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <Register />
          </PublicRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <Login />
          </PublicRoute>
          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <FilmsPage />
          </PrivateRoute>
          <Route />
        </Switch>
      </Suspense>
    </MainContainer>
  );
}
