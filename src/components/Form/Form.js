import React, { useState } from 'react';
import s from './Form.module.css';

import { Operations, Selectors } from '../../redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
  const [user, setUser] = useState({ name: '', number: '' });
  const { name, number } = user;

  const handleInput = evt => {
    const { name, value } = evt.currentTarget;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };
  const disputch = useDispatch();
  const contacts = useSelector(Selectors.getAllContacts);

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }

    if (contacts.some(el => el.number.toLowerCase() === number.toLowerCase())) {
      return alert(`${number} is already in contacts`);
    }
    disputch(Operations.addContact(name, number));

    reset();
  };

  const reset = () => {
    setUser({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form__container}>
      <label htmlFor="" className={s.form__label}>
        {' '}
        Name
        <input
          type="text"
          name="name"
          className={s.form__input}
          placeholder="Kim Chen In"
          required
          value={name}
          onChange={handleInput}
        />
      </label>
      <br />
      <label htmlFor="" className={s.form__label}>
        {' '}
        Number
        <input
          type="tel"
          name="number"
          className={s.form__input}
          placeholder="38-067-504-13-09"
          required
          value={number}
          onChange={handleInput}
        />
      </label>
      <button type="submit" className={s.form__button}>
        Add contact
      </button>
    </form>
  );
}

// Form.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
