import React from 'react'

function MainPage() {

    return (
        <body>
            <div class="login-box">
                <img class="logoImg_inicio_sesion" src="../Images/steam.jpg" alt="SteamLogo" />
                <h1>Steam Chafa</h1>
                <form>
                    <div class="campo">
                        <label>Correo electronico</label>
                        <input
                            type="text"
                            id="inicio_email"
                            placeholder="Ingresa tu correo electronico"
                        />
                        <label class="aviso" id="avisoUsuario">Ingrese el correo electronico para continuar</label>
                    </div>
                    <div class="campo" >
                        <label >Contraseña</label>
                        <input
                            type="password"
                            id="inicio_contrasenia"
                            placeholder="Ingresa tu contraseña"
                        />
                        <label class="aviso" id="avisoPassword">Ingrese la contraseña para continuar</label>
                    </div>
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

export default MainPage;
