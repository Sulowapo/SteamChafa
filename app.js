const express = require('express');
const routes = require('./routes/routes')

const app = express();

app.use(express.json());

// Configura las routes
routes(app)

app.listen(3000, () => {
    console.log('Aplicación corriendo en el puerto 3000');
});