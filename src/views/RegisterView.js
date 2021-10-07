import React, { useEffect } from 'react';
import { OperationsAuth } from '../redux/auth';

import { useDispatch } from 'react-redux';
import s from './views.module.css';
import FormContainer from '../components/Containers/FormContainer';

import useInput from '../components/Hooks/useInput';
import checkLocalStoradge from '../components/Utils/checkLocalStoradge';

export default function RegisterView() {
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, isPassword: true });
  const name = useInput('', { isEmpty: true });

  const disputch = useDispatch();

  useEffect(() => {
    checkLocalStoradge('userName', name.onStorageHandler);
    checkLocalStoradge('userEmail', email.onStorageHandler);
    checkLocalStoradge('userPassword', password.onStorageHandler);

    return function () {
      console.log('Hi');
      const userNameLocalStorage = localStorage.getItem('userName');
      const userEmailLocalStorage = localStorage.getItem('userEmail');
      const userPasswordLocalStorage = localStorage.getItem('userPassword');
      if (
        userNameLocalStorage ||
        userEmailLocalStorage ||
        userPasswordLocalStorage
      ) {
        disputch(OperationsAuth.ResumeRegister());
      }
    };
  }, []);

  const handleLocalStoradge = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        localStorage.setItem('userName', value);
        break;
      case 'email':
        localStorage.setItem('userEmail', value);
        break;
      case 'password':
        localStorage.setItem('userPassword', value);
        break;
      default:
        console.log("There aren't such data");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.clear();
    // Here we send the request to server for client's registration
    disputch(OperationsAuth.registerUser(name.value));

    reset();
  };

  const reset = () => {
    name.reset();
    email.reset();
    password.reset();
  };

  return (
    <FormContainer>
      <h1 className={s.title}>Registraion</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          {name.isDirty && name.isEmpty && (
            <div style={{ color: 'red' }}> The field should not be empty</div>
          )}
          <input
            type="text"
            name="name"
            value={name.value}
            onChange={e => {
              name.handleChange(e);
              handleLocalStoradge(e);
            }}
            onFocus={name.onBlur}
          />
        </label>

        <label className={s.label}>
          Email
          {email.isDirty && email.isEmpty && (
            <div style={{ color: 'red' }}> The field should not be empty</div>
          )}
          {email.isDirty && email.emailError && (
            <div style={{ color: 'red' }}> Please enter correct email</div>
          )}
          <input
            type="email"
            name="email"
            value={email.value}
            onChange={e => {
              email.handleChange(e);
              handleLocalStoradge(e);
            }}
            onBlur={email.onBlur}
          />
        </label>

        <label className={s.label}>
          Password
          {password.isDirty && password.isEmpty && (
            <div style={{ color: 'red' }}>The field should not be empty</div>
          )}
          {password.isDirty && password.passwordError && (
            <div style={{ color: 'red' }}>
              Password must contain 6 characters (one big, one number, one
              special){' '}
            </div>
          )}
          <input
            type="password"
            name="password"
            value={password.value}
            onChange={e => {
              password.handleChange(e);
              handleLocalStoradge(e);
            }}
            onBlur={password.onBlur}
          />
        </label>

        <button
          type="submit"
          disabled={
            !email.inputValid || !name.inputValid || !password.inputValid
          }
        >
          Submit
        </button>
      </form>
    </FormContainer>
  );
}
