const express = require('express');
const routes = require('./routes/routes')
const globalErrorHandler = require('./controller/errorController')
const app = express();

app.use(express.json());


// Configura las routes
routes(app)

// Manejador de errores
app.use(globalErrorHandler);

app.listen(3000, () => {
    console.log('Aplicación corriendo en el puerto 3000');
});