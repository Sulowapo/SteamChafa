const express = require('express');
const bodyParser = require('body-parser');
const adminController = require('./controller/adminController');
const userController = require('./controller/userController');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Para users
app.use(express.json());
app.use('/users', userRouter);

//Para admin
app.get('/admin', adminController.getAdmins);
app.post('/adminp', adminController.createAdmin);
app.put('/admin/:name', adminController.updateAdminByName);
app.delete('/admin/:name', adminController.deleteAdminByName);

app.listen(3000, () => {
    console.log('Aplicación corriendo en el puerto 3000');
});