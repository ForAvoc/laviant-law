import React from 'react';
import logo from './logo.svg';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <header className={s.App__header}>
        <img src={logo} className={s.App__logo} alt="img" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={s.App__link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
