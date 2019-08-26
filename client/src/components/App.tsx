/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useUser } from '../context/user.context';
import GlobalStyle from '../theme/globalStyle';
import { FullPageSpinner } from './lib';

const AuthenticatedApp = React.lazy((): any => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy((): any => import('./UnauthenticatedApp'));

const App: React.FC = (): React.ReactElement => {
  const user = useUser();

  return (
    <React.Fragment>
      <React.Suspense fallback={<FullPageSpinner />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
