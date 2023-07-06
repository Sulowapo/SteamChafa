import logo from "./steam-logo.png";
import "./login.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <body>
      <div class="login-box">
        <img class="logoImg_inicio_sesion" src={logo} />
        <h1>Iniciar Sesión</h1>
        <form>
          <label>ID usuario</label>
          <input
            type="text"
            id="inicio_id_usuario"
            value=""
            placeholder="Ingresa Tu Nombre de Usuario"
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="contrasenia"
            id="inicio_contrasenia"
            value=""
            minlength="5"
            placeholder="Ingresar Contraseña"
          />
          <input type="submit" value="Iniciar Sesión"></input>
          <a>&copy; 2023 Steam Chafa </a>

        </form>
      </div>
    </body>
  );
}

export default App;
