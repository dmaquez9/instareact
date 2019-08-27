/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Input } from 'antd';
import { useAuth } from '../context/auth.context';
import useCallbackStatus from '../utils/use-callback-status';
import { Spinner } from './lib';
// import styled from 'styled-components';

const LoginForm = ({ onSubmit, buttonText }: any): any => {
  const { isPending, isRejected, error, run } = useCallbackStatus();
  const handleSubmit = (event: any): any => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    console.log(event.target);
    run(
      onSubmit({
        username: username.value,
        password: password.value,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <Input id="username" name="username" />
      <label htmlFor="password">Password</label>
      <Input.Password id="password" name="password" />
      <div>
        <button type="submit">
          {buttonText} {isPending ? <Spinner /> : null}
        </button>
      </div>
      {isRejected ? <div>{error ? error.message : null}</div> : null}
    </form>
  );
};

const UnauthenticatedApp: React.FC = (): React.ReactElement => {
  const { login } = useAuth();
  return (
    <div>
      <h1>Bookshelf</h1>
      <LoginForm onSubmit={login} buttonText="Register" />
    </div>
  );
};

export default UnauthenticatedApp;
