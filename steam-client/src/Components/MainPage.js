import React from 'react';
import "../Assets/CSS/mainPage.css";
import avatar from "../Assets/Images/avatar.jpg";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function MainPage() {

    const { state } = useLocation();

    const cargarJuegos = () => {

    }

    return (
        <div id="mainPage">
            <div id="cuenta">
                <ul>
                    <li class="avatarItem">
                        <a id="link" > <img class="avatarImage" src={avatar} alt="SteamLogo" /> {state.userData.name}</a>
                        <ul class="dropdownMenu">
                            <li><Link to="/">Cerrar sesión</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="menu">
                <ul>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Biblioteca</a></li>
                </ul>
            </div>
            <div id="main">
                <div id="tienda">

                </div>
            </div>
        </div>
    );
}

export default MainPage;
