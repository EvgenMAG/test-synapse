import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AllNavigation.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(selectorsAuth.getIsAuthenticated);
  return (
    <header style={s.header}>
      <MainNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
