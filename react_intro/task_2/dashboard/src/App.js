import HolbertonLogo from './Holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={ HolbertonLogo } alt="logo-holberton" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">email:</label>
        <input type='email' id='email'></input>
        <label for="password">password:</label>
        <input type='password' id='password'></input>
        <button>OK</button>
      </main>
      <footer className="App-footer">
      <p>Copyright { getFullYear()} - {getFooterCopy('isIndex')}</p>
      </footer>
    </>
  );
}

export default App;
