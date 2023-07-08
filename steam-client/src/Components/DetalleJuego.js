import React, { useEffect, useState } from "react";
import "../Assets/CSS/detalleJuego.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function DetalleJuego() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const userData = state && state.userData;

    const [game, setGame] = useState("");

    const handleClick = () => {
        navigate("/compra", { state: { userData: userData } });
    };

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch("http://localhost:4000/games", {
                    headers: {
                        Authorization: `Bearer ${state.userData.token}`,
                    },
                });
                const data = await response.json();

                const game = data.find((game) => game._id === id);
                if (game) {
                    setGame(game);
                }
            } catch (error) {
                console.error("Error al obtener los juegos:", error);
            }
        };

        fetchGames();
    }, [state.userData.token]);

    return (
        <div class="container">
            <div class="menuT">
                <ul>
                    <li>
                        <a onClick={handleClick}>Inicio</a>
                    </li>
                </ul>
            </div>
            <div class="juego">
                <h1>Detalles del Juego</h1>
                <p>Título: {game.title}</p>
                <p>Precio: ${game.price}</p>
                <p>Descripción: {game.description}</p>
                <p>Género: {game.genre}</p>

                <button class="comprar-btn" onClick={handleClick}>Comprar</button>
            </div>

        </div>
    );
}

export default DetalleJuego;
