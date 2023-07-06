import logo from "../Assets/Images/steam-logo.png";
import "../Assets/CSS/login.css";

function Login() {
    return (
        <body>
            <div class="login-box">
                <img class="logoImg_inicio_sesion" src={logo} alt="SteamLogo" />
                <h1>Steam Chafa</h1>
                <form>
                    <label>Nombre de usuario</label>
                    <input
                        type="text"
                        id="inicio_id_usuario"
                        placeholder="Ingresa tu nombre de usuario"
                    />
                    <label>Contraseña</label>
                    <input
                        type="password"
                        id="inicio_contrasenia"
                        placeholder="Ingresa tu contraseña"
                    />
                    <input type="submit" value="Iniciar Sesión"></input>
                    <div class="a">
                        <a>Todavía no eres miembro de Steam Chafa?  </a>
                        <a href="#"> Crea tu cuenta aquí</a>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default Login;