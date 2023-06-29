const express = require('express');
const routes = require('./routes/routes')
const globalErrorHandler = require('./controller/errorController')
const app = express();
const authRoutes = require('./routes/authRoutes')
const authenticateJWT = require('./middleware/authMiddleware');


app.use(express.json());


//Ruta publica sin autenticación JWT
app.use(authRoutes);

// Middleware de autenticación JWT 
app.use(authenticateJWT);

// Configura las routes
routes(app);

// Manejador de errores
app.use(globalErrorHandler);

app.listen(3000, () => {
    console.log('Aplicación corriendo en el puerto 3000');
});