import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './Components/Login';
import App from './Components/App';
import Register from './Components/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Login />,
    <Register />,
    <App />
);