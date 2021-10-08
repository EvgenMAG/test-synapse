import React, { useState } from 'react';

import { OperationsAuth } from '../redux/auth';
import { useDispatch } from 'react-redux';

import FormContainer from '../components/Containers/FormContainer';
import Form from '../components/Containers/Form';
import Label from '../components/Containers/Label';
import Input from '../components/Containers/Input';
import BtnFormSubmit from '../components/Buttons/BtnFormSubmit';

import s from './views.module.css';

export default function RegisterView() {
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const disputch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    disputch(OperationsAuth.LoginUser({ email, password }));
    reset();
  };

  const reset = () => {
    setUser({ email: '', password: '' });
  };

  return (
    <FormContainer>
      <h1 className={s.title}>Login</h1>

      <Form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <Label className={s.label}>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label className={s.label}>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <BtnFormSubmit type="submit">Submit</BtnFormSubmit>
      </Form>
    </FormContainer>
  );
}
