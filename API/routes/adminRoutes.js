const express = require('express')
const adminController = require('../controller/adminController')

const router = express.Router();

router.get('/', adminController.getAdmins);

router.post('/', adminController.createAdmin);

router.put('/:name', adminController.updateAdminByName);

router.delete('/:name', adminController.deleteAdminByName);

module.exports = router;