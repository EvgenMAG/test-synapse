import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */

export default function PublicRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(selectorsAuth.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={routeProps.redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
