import logo from "../Assets/Images/steam-logo.png";
import "../Assets/CSS/login.css";
import { Link } from 'react-router-dom';

function Login() {

    const iniciarSesion = () => {
        let email = document.getElementById('inicio_email');
        let password = document.getElementById('inicio_password');
        if (email.value === '') {
            document.getElementById('avisoEmail').style.visibility = 'visible';
            if (password.value === '') {
                document.getElementById('avisoPassword').style.visibility = 'visible';
            } else {
                document.getElementById('avisoPassword').style.visibility = 'hidden';
            }
        } else if (password.value === '') {
            document.getElementById('avisoEmail').style.visibility = 'hidden';
            document.getElementById('avisoPassword').style.visibility = 'visible';
        }
        else {
            fetch('localhost:4000/login', {
                headers: {
                    "Content-Type":"application/json",
                },
                method: 'post',
                body: JSON.stringify({
                    "email": email.value,
                    "password": password.value
                })
            })
                .then()
                .catch(err => {
                    alert('ocurrio un error al iniciar sesión, intentelo más tarde.');
                })
        }
    }

    return (
        <body>
            <div class="login-box">
                <img class="logoImg_inicio_sesion" src={logo} alt="SteamLogo" />
                <h1>Steam Chafa</h1>
                <form action="javascript:void(0)" onSubmit={iniciarSesion}>
                    <div class="campo">
                        <label>Correo electronico</label>
                        <input
                            type="text"
                            id="inicio_email"
                            placeholder="Ingresa tu correo electronico"
                        />
                        <label class="aviso" id="avisoEmail">Ingrese el correo electronico para continuar</label>
                    </div>
                    <div class="campo" >
                        <label >Contraseña</label>
                        <input
                            type="password"
                            id="inicio_password"
                            placeholder="Ingresa tu contraseña"
                        />
                        <label class="aviso" id="avisoPassword">Ingrese la contraseña para continuar</label>
                    </div>
                    <input type="submit" value="Iniciar Sesión"></input>
                    <div class="a">
                        <a>Todavía no eres miembro de Steam Chafa?  </a>
                        <Link to="/Registro"> Crea tu cuenta aquí</Link>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default Login;