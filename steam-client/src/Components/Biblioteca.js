import React, { useEffect, useState } from "react";
import "../Assets/CSS/biblioteca.css";
import { useLocation, useNavigate } from "react-router-dom";

function Tienda() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const userData = state && state.userData;

    const [userGames, setUserGames] = useState([]);
    const [games, setGames] = useState([]);

    const handleClick = () => {
        navigate("/mainPage", { state: { userData: userData } });
    };

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
                    setUserGames(user.games || []);
                }
            } catch (error) {
                console.error("Error al obtener los juegos del usuario:", error);
            }
        };

        fetchUserGames();
    }, [state.userData.token]);

    useEffect(() => {
        const fetchAllGames = async () => {
            try {
                const response = await fetch("http://localhost:4000/games", {
                    headers: {
                        Authorization: `Bearer ${state.userData.token}`,
                    },
                });
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error("Error al obtener todos los juegos:", error);
            }
        };

        fetchAllGames();
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
            <div class="juegos">
                {userGames.length > 0 ? (
                    userGames.map((gameId) => {
                        const game = games.find((game) => game._id === gameId);
                        if (game) {
                            return (
                                <div class="user-game-box" key={game._id}>
                                    <h2>{game.title}</h2>
                                    <p>{game.description}</p>
                                    <p>{game.genre}</p>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })
                ) : (
                    <div class="no-disponible">
                        <p>No tienes juegos disponibles</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tienda;
