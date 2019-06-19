import React from 'react';
import Logo from '../../assets/images/logo.svg';
import styles from './App.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.AppLogo}>
          <Logo />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
