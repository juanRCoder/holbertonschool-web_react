import "Login.css";

function Login() {
  return (
    <>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">email:</label>
          <input type="email" id="email" autoComplete="on" />
          <label htmlFor="password">password:</label>
          <input type="password" id="password" autoComplete="on" />
          <button>OK</button>
        </form>
      </main>
    </>
  );
}

export default Login;
