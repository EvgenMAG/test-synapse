import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OperationsAuth } from '../../redux/auth';
import { selectorsAuth } from '../../redux/auth';
import avatar from './default-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectorsAuth.getUsername);

  return (
    <div className={s.container}>
      <span className={s.welcome}>Welcome</span>
      <span className={s.name}>{userName}</span>
      <a
        type="button"
        className={s.btnLogOut}
        onClick={() => dispatch(OperationsAuth.LogoutUser())}
      >
        Logout
      </a>
    </div>
  );
}
