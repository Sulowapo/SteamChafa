const express = require('express');
const routes = require('./routes/routes')
const globalErrorHandler = require('./controller/errorController')
const authRoutes = require('./routes/authRoutes')
const authenticateJWT = require('./middleware/authMiddleware');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());


//Ruta publica sin autenticación JWT
app.use(authRoutes);

// Middleware de autenticación JWT 
app.use(authenticateJWT);

// Configura las routes
routes(app);

// Manejador de errores
app.use(globalErrorHandler);

app.listen(4000, () => {
    console.log('Aplicación corriendo en el puerto 4000');
});