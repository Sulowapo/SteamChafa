 const express = require('express');
 const userController = require('../controller/userController');

 const router = express.Router();

 router.get('/', userController.getUsers);

 router.post('/', userController.createUser);

 router.put('/:email', userController.updateUserByName);

 router.delete('/:email', userController.deleteUserByName);

 module.exports = router;