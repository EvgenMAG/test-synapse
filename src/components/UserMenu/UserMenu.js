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
      <img src={avatar} alt="" width="40" className={s.avatar} />
      <span className={s.name}>Hi Dear {userName}</span>
      <button
        type="button"
        onClick={() => dispatch(OperationsAuth.LogoutUser())}
      >
        Logout
      </button>
    </div>
  );
}
