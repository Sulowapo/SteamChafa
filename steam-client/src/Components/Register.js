import logo from "../Assets/Images/steam-logo.png";
import "../Assets/CSS/login.css";

function Register() {
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
                        placeholder="Ingresa un nombre de usuario"
                    />
                    <label>Contraseña</label>
                    <input
                        type="password"
                        id="inicio_contrasenia"
                        placeholder="Ingresa una contraseña"
                    />
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="inicio_contrasenia"
                        placeholder="Repite la contraseña"
                    />
                    <input type="submit" value="Registrarse"></input>

                    <div class="a">
                        <a>Ya eres miembro?</a> <a href='#'>Inicia sesión aquí</a>
                    </div>


                </form>
            </div>
        </body>
    );
}
export default Register;