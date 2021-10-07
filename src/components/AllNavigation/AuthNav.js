import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AllNavigation.module.css';
import { useSelector } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';

export default function AuthNav() {
  const resumeRegister = useSelector(selectorsAuth.getRegistrationStatus);

  return (
    <div>
      {!resumeRegister ? (
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Sign up
        </NavLink>
      ) : (
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Resume Sign up
        </NavLink>
      )}
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
