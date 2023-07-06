const express = require('express');
const userRouter = require('./userRoutes');
const adminRouter = require('./adminRoutes');
const gameRouter = require('./gameRoutes');
const purchaseRouter = require('./purchaseRoutes');
const dlcRouter = require('./dlcRoutes');

const authenticateJWT = require('../middleware/authMiddleware');
const CustomeError = require('../utils/CustomeError')

// Función para registrar los enrutadores en la aplicación Express
const registerRouters = (app, routers) => {
  routers.forEach((router) => {
    app.use(router.path, router.middleware ,router.router); // Registra el enrutador en la aplicación
  });
};

// Exportación del módulo como una función que configura y registra las rutas
module.exports = (app) => {


  registerRouters(app, [
    { path: '/users', router: userRouter, middleware: authenticateJWT },
    { path: '/admins', router: adminRouter, middleware: authenticateJWT  },
    { path: '/games', router: gameRouter, middleware: authenticateJWT  },
    { path: '/purchases', router: purchaseRouter, middleware: authenticateJWT  },
    { path: '/dlcs', router: dlcRouter, middleware: authenticateJWT  }
    // Agrega más rutas aquí si es necesario
  ]);

  // Manejador de URLS
  app.all('*', (req, res, next) => {
    const err = new CustomeError(`No se encontró ${req.originalUrl} en el servidor`, 404);
    next(err)
  });
};
