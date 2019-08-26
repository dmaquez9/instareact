/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useAsync } from 'react-async';
import { bootstrapAppData } from '../utils/bootstrap';
import * as authClient from '../utils/auth.client';
import { FullPageSpinner } from '../components/lib';

const AuthContext = React.createContext<any | null>(null);

function AuthProvider(props: any): any {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const {
    data = {user: null},
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({
    promiseFn: bootstrapAppData,
  });

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true)
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />;
    }
    if (isRejected) {
      return (
        <div>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      )
    }
  }
  const login = (form: any): any => authClient.login(form).then(reload);
  const register = (form: any): any => authClient.register(form).then(reload);
  const logout = (): any => authClient.logout().then(reload);
  return <AuthContext.Provider value={{ data, login, logout, register }} {...props} />;
}

function useAuth(): any {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
export { AuthProvider, useAuth };
