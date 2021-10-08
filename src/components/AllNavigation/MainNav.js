import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './AllNavigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.mainNav}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        HOME
      </NavLink>
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        BROWSE
      </NavLink>
    </nav>
  );
}
