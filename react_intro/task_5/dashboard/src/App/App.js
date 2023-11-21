import React from 'react';
import HolbertonLogo from '../assets/Holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={ HolbertonLogo } alt="logo-holberton" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">email:</label>
          <input type='email' id='email' autoComplete='on'/>
          <label htmlFor="password">password:</label>
          <input type='password' id='password' autoComplete='on'/>
          <button>OK</button>
        </form>
      </main>
      <footer className="App-footer">
      <p>Copyright { getFullYear()} - {getFooterCopy('isIndex')}</p>
      </footer>
    </>
  );
}

export default App;
