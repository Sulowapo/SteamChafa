import React from 'react';
import "../Assets/CSS/mainPage.css";
import { useLocation } from 'react-router-dom';

function MainPage() {

    const { state } = useLocation();
    console.log(state.userData.token);
    console.log(state.userData.email);

    return (
        <div id="menu">
        <ul>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Biblioteca</a></li>
        </ul>
      </div>
    
    );
}

export default MainPage;
