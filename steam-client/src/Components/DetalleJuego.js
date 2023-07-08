import React, { useEffect, useState } from "react";
import "../Assets/CSS/detalleJuego.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function DetalleJuego() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const userData = state && state.userData;

    const [user, setUser] = useState([]);
    const [game, setGame] = useState("");

    const handleClick = () => {
        compra();
        navigate("/compra", { state: { userData: userData } });
    };

    const compra = async () => {
        try {
            user.games.push(id);

            console.log(user.games);
            const body = JSON.stringify({
                name: user.name,
                password: user.password,
                level: (user.level + 1),
                games: user.games, 
                friends: user.friends
            })
            console.log(body)
            const response = await fetch(`http://localhost:4000/users/${state.userData.email}`, {
                headers: {
                    Authorization: `Bearer ${state.userData.token}`,
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify({
                    name: user.name,
                    password: user.password,
                    level: (user.level + 1),
                    games: user.games
                })
                
            });
            if (response.ok) {
            } else {
                console.error("Error al realizar la compra");
            }
        } catch (error) {
            console.error("Error al obtener los juegos:", error);
        }
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

    useEffect(() => {
        const fetchUserGames = async () => {
            try {
                const response = await fetch("http://localhost:4000/users", {
                    headers: {
                        Authorization: `Bearer ${state.userData.token}`,
                    },
                });
                const data = await response.json();
                const user = data.find((user) => user.email === state.userData.email);
                if (user) {
                    setUser(user);
                }
            } catch (error) {
                console.error("Error al obtener los juegos del usuario:", error);
            }
        };

        fetchUserGames();
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
