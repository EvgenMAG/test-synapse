import React from 'react';
import s from './BtnModalClose.module.css';

export default function ButtonClose({ onBtnClick, id }) {
  return (
    <button
      type="button"
      className={s.closeModalBtn}
      onClick={() => onBtnClick(id)}
    >
      X
    </button>
  );
}
