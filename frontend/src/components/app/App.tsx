import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Link
} from 'react-router-dom';

// Pages
import LoginPage from '../../routes/Login';
import SignupPage from '../../routes/Signup';

import Logo from '../../assets/images/logo.svg';
import styles from './App.scss';

const App: React.FC = () => {
  return (
    <Router>
        <div className={styles.App}>
        <header className={styles.AppHeader}>
          <div className={styles.AppLogo}>
            <Logo />
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link to="/"> Login </Link>
          <Link to="/register"> Register </Link>
            <Switch>
              <Route exact path='/' component={LoginPage}></Route>
              <Route exact path='/register' component={SignupPage}></Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
