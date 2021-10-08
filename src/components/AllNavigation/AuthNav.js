import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AllNavigation.module.css';
import { useSelector } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';

export default function AuthNav() {
  const userNameLocalStorage = localStorage.getItem('userName');
  const userEmailLocalStorage = localStorage.getItem('userEmail');
  const userPasswordLocalStorage = localStorage.getItem('userPassword');

  return (
    <div>
      {!userNameLocalStorage ||
      !userEmailLocalStorage ||
      !userPasswordLocalStorage ? (
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          SIGN UP
        </NavLink>
      ) : (
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Resume SIGN UP
        </NavLink>
      )}
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        LOG IN
      </NavLink>
    </div>
  );
}
