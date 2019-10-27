import React from 'react';
import { LoginForm } from './LoginForm';

export const Login = ({ setPage }) => {
  return (
    <>
      <h1>Логин</h1>
      <LoginForm setPage={setPage} />
    </>
  );
};