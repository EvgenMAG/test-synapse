import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectorsAuth } from '../../redux/auth';
import s from './AllNavigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(selectorsAuth.getIsAuthenticated);
  console.log(isAuthenticated);

  return (
    <nav>
      {isAuthenticated ? (
        <NavLink to="/contacts" exact className={s.link}>
          BROWSE
        </NavLink>
      ) : (
        <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
          HOME
        </NavLink>
      )}
    </nav>
  );
}
