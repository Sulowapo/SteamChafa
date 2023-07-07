import logo from "../Assets/Images/steam-logo.png";
import "../Assets/CSS/login.css";
import { Link } from 'react-router-dom';

function Register() {

    const registrarse = () => {
        let user = document.getElementById('registro_user');
        let email = document.getElementById('registro_email');
        let password = document.getElementById('registro_password');
        let passwordConfirm = document.getElementById('registro_passwordConfirm');
        if(user.value === ''){
            document.getElementById('avisoUser').style.visibility = 'visible';
        }
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
            fetch('localhost:4000/register', {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'post',
                body: JSON.stringify({
                    "user": email.value,
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
                <form action="javascript:void(0)" onSubmit={registrarse}>
                    <div class="campo">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            id="registro_user"
                            placeholder="Ingresa un nombre de usuario"
                        />
                        <label class="aviso" id="avisoUser">Ingrese el nombre de usuario para continuar</label>
                    </div>
                    <div class="campo">
                        <label>Correo electronico</label>
                        <input
                            type="text"
                            id="registro_email"
                            placeholder="Ingresa un correo electronico"
                        />
                        <label class="aviso" id="avisoEmail">Ingrese el correo electronico para continuar</label>
                    </div>
                    <div class="campo">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            id="registro_contrasenia"
                            placeholder="Ingresa una contraseña"
                        />
                        <label class="aviso" id="avisoPassword">Ingrese la contraseña para continuar</label>
                    </div>
                    <div class="campo">
                        <label>Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="registro_contrasenia"
                            placeholder="Repite la contraseña"
                        />
                        <label class="aviso" id="avisoPasswordConfirm">Ingrese la contraseña para continuar</label>
                    </div>
                    <input type="submit" value="Registrarse"></input>

                    <div class="a">
                        <a>Ya eres miembro?</a> <Link to="/login">Inicia sesión aquí</Link>
                    </div>


                </form>
            </div>
        </body>
    );
}
export default Register;