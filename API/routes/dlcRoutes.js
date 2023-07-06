const express = require('express');
const dlcController = require('../controller/dlcController');

const router = express.Router();

router.get('/', dlcController.getDlcs);

router.post('/', dlcController.createDlc);

router.put('/:name', dlcController.updateDlcByTitle);

router.delete('/:title', dlcController.deleteDlcByTitle);

module.exports = router;