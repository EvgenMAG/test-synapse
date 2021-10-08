import React, { useEffect } from 'react';
import { OperationsAuth } from '../redux/auth';

import { useDispatch } from 'react-redux';
import s from './views.module.css';
import FormContainer from '../components/StyledComponents/FormContainer';
import Form from '../components/StyledComponents/Form';
import Label from '../components/StyledComponents/Label';
import Input from '../components/StyledComponents/Input';
import BtnFormSubmit from '../components/StyledComponents/BtnFormSubmit';

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

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          {name.isDirty && name.isEmpty && (
            <div style={{ color: 'red' }}> The field should not be empty</div>
          )}
          <Input
            type="text"
            name="name"
            value={name.value}
            onChange={e => {
              name.handleChange(e);
              handleLocalStoradge(e);
            }}
            onFocus={name.onBlur}
          />
        </Label>

        <Label>
          Email
          {email.isDirty && email.isEmpty && (
            <div style={{ color: 'red' }}> The field should not be empty</div>
          )}
          {email.isDirty && email.emailError && (
            <div style={{ color: 'red' }}> Please enter correct email</div>
          )}
          <Input
            type="email"
            name="email"
            value={email.value}
            onChange={e => {
              email.handleChange(e);
              handleLocalStoradge(e);
            }}
            onBlur={email.onBlur}
          />
        </Label>

        <Label>
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
          <Input
            type="password"
            name="password"
            value={password.value}
            onChange={e => {
              password.handleChange(e);
              handleLocalStoradge(e);
            }}
            onBlur={password.onBlur}
          />
        </Label>

        <BtnFormSubmit
          type="submit"
          disabled={
            !email.inputValid || !name.inputValid || !password.inputValid
          }
        >
          Submit
        </BtnFormSubmit>
      </Form>
    </FormContainer>
  );
}
