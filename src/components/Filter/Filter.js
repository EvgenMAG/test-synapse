import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Action, Selectors } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Filter() {
  const disputch = useDispatch();
  const filteredName = useSelector(Selectors.getFilterValue);
  const onChangeInput = e => {
    const { value } = e.target;
    disputch(Action.filterContacts(value));
  };

  return (
    <div className={s.filter__container}>
      <h3 className={s.filter__title}>Find contact by name</h3>
      <input
        className={s.filter__input}
        type="text"
        value={filteredName}
        onChange={onChangeInput}
      />
    </div>
  );
}
