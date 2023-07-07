import React, { useEffect, useState } from "react";
import "../Assets/CSS/tienda.css";
import { useLocation, useNavigate } from "react-router-dom";

function Tienda() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const userData = state && state.userData;

    const [games, setGames] = useState([]);

    const handleClick = () => {
        navigate("/mainPage", { state: { userData: userData } });
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
                setGames(data);
            } catch (error) {
                console.error("Error al obtener los juegos:", error);
            }
        };

        fetchGames();
    }, [state.userData.token]);

    return (
        <div class="container">
            <div id="menuT">
                <ul>
                    <li>
                        <a onClick={handleClick}>Inicio</a>
                    </li>
                </ul>
            </div>

            {games.map((game) => (
                <div className="game-box" key={game.id}>
                    <div className="game-title">{game.title}</div>
                    <div className="game-price">${game.price}</div>
                </div>
            ))}
        </div>
    );
}

export default Tienda;
