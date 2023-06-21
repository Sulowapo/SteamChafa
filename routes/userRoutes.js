 const express = require('express');
 const userController = require('../controller/userController');

 const router = express.Router();

 router.get('/', userController.getUsers);

 router.post('/', userController.createUser);

 router.put('/:name', userController.updateUserByName);

 router.delete('/:name', userController.deleteUserByName);

 module.exports = router;