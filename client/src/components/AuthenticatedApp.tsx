import React from 'react';
import { useUser } from '../context/user.context';

const AuthenticatedApp: React.FC = (): React.ReactElement => {
  const user = useUser();
  // const {logout} = useAuth()
  return <div>{JSON.stringify(user)}</div>;
};

export default AuthenticatedApp;
