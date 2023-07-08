import React, { useEffect, useState } from "react";
import "../Assets/CSS/comprar.css";
import { useLocation, useNavigate } from "react-router-dom";

function Tienda() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const userData = state && state.userData;

    const [games, setGames] = useState([]);

    const handleClick = () => {
        navigate("/mainPage", { state: { userData: userData } });
    };

    return (
        <div class="container">
            <div class="menuT">
                <ul>
                    <li>
                        <a onClick={handleClick}>Inicio</a>
                    </li>
                </ul>
            </div>
            <div class="compra">
                <h1>¡Gracias por su compra!</h1>
            </div>
        </div>
    );

}

export default Tienda;
