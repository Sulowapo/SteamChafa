import logo from "../Assets/Images/steam-logo.png";
import "../Assets/CSS/login.css";
import { Link } from 'react-router-dom';

function Register() {
    const registrarse = () => {
        let user = document.getElementById('registro_user');
        let email = document.getElementById('registro_email');
        let password = document.getElementById('registro_password');
        let passwordConfirm = document.getElementById('registro_passwordConfirm');
        //validation
        if(user.value === ''){
            document.getElementById('avisoUser').style.visibility = 'visible';
        } else { document.getElementById('avisoUser').style.visibility = 'hidden'; }
        if(email.value === ''){
            document.getElementById('avisoEmail').style.visibility = 'visible';
        } else { document.getElementById('avisoEmail').style.visibility = 'hidden'; }
        if(password.value === ''){
            document.getElementById('avisoPassword').style.visibility = 'visible';
        } else { document.getElementById('avisoPassword').style.visibility = 'hidden'; }
        if(passwordConfirm.value === ''){
            let confirm = document.getElementById('avisoPasswordConfirm');
            confirm.style.visibility = 'visible';
            confirm.value = 'Ingrese nuevamente la contraseña para continuar';
        } else {
        if (password.value !== passwordConfirm.value){
            let confirm = document.getElementById('avisoPasswordConfirm');
            confirm.value = 'Las contraseñas no coinciden';
            confirm.style.visibility = 'visible';}
        else { document.getElementById('avisoPasswordConfirm').style.visibility = 'hidden'; }}
        if(user.value !== '' && email.value !== '' && password.value !== '' && passwordConfirm.value !== '' && password.value === passwordConfirm.value) {
            fetch('http://localhost:4000/register', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'post',
                body: JSON.stringify({
                    name: user.value,
                    email: email.value,
                    password: password.value,
                    level: 0
                })
            })
                .then(() => {
                    window.location.href="/";
                })
                .catch(err => {
                    alert('ocurrio un error al registrar el usuario, intentelo más tarde.');
                    alert(err);
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
                            id="registro_password"
                            placeholder="Ingresa una contraseña"
                        />
                        <label class="aviso" id="avisoPassword">Ingrese la contraseña para continuar</label>
                    </div>
                    <div class="campo">
                        <label>Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="registro_passwordConfirm"
                            placeholder="Repite la contraseña"
                        />
                        <label class="aviso" id="avisoPasswordConfirm">Ingrese nuevamente la contraseña para continuar</label>
                    </div>
                    <input type="submit" value="Registrarse"></input>
                    <div class="a">
                        <a>Ya eres miembro?</a> <Link to="/">Inicia sesión aquí</Link>
                    </div>


                </form>
            </div>
        </body>
    );
}
export default Register;