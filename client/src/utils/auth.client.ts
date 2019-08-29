/* eslint-disable @typescript-eslint/no-explicit-any */
import client from './api.client';

interface UserInterface {
  username: string;
  password: string;
}

const handleUserResponse = ({ data }: any): any => data;

const login = ({ username, password }: UserInterface): any =>
  client('auth/login', { body: { username, password }}).then(handleUserResponse);

const register = ({ username, password }: UserInterface): any =>
  client('auth/register', { body: { username, password } }).then(handleUserResponse);

const logout = (): any => Promise.resolve();

const getUser = (): any =>
  client('auth/me').catch((error: any): any => {
    logout();
    return Promise.reject(error);
  });

export { login, register, logout, getUser };
