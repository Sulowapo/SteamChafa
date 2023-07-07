import React from 'react';
import "../Assets/CSS/mainPage.css";
import {useLocation, useNavigate } from 'react-router-dom';

function MainPage() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const userData = state && state.userData;

  const handleClick = () => {
    navigate('/tienda', { state: { userData: userData } });

  };

  return (
    <div id="menu">
      <ul>
        <li><a onClick={handleClick}>Tienda</a></li>
        <li><a href="#">Biblioteca</a></li>
      </ul>
    </div>

  );
}

export default MainPage;
