import HolbertonLogo from "../assets/Holberton-logo.jpg";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="App-header">
        <img src={HolbertonLogo} alt="logo-holberton" />
        <h1>School dashboard</h1>
      </header>
    </>
  );
}

export default Header;