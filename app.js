const express = require('express');
const bodyParser = require('body-parser');
const adminController = require('./controller/adminController');
const userController = require('./controller/userController');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Para users
app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);
app.put('/users/:name', userController.updateUserByName);
app.delete('/users/:name', userController.deleteUserByName);

//Para admin
app.get('/admin', adminController.getAdmins);
app.post('/admin', adminController.createAdmin);
app.put('/admin/:name', adminController.updateAdminByName);
app.delete('/admin/:name', adminController.deleteAdminByName);

app.listen(3000, () => {
    console.log('Aplicación corriendo en el puerto 3000');
});