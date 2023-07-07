import React from 'react'
import { useLocation } from 'react-router-dom';

function MainPage() {

    const { state } = useLocation();
    console.log(state.userData.token);
    console.log(state.userData.email);

    return (
        <div></div>
    );
}

export default MainPage;
