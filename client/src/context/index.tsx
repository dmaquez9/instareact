/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AuthProvider } from './auth.context';
import { UserProvider } from './user.context';

function AppProviders({ children }: any): any {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
export default AppProviders;
