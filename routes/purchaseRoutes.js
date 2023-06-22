const express = require('express');
const purchaseControllerr = require('../controller/purchaseController');

const router = express.Router();

router.get('/', purchaseControllerr.getAllPurchases);

router.post('/', purchaseControllerr.createPurchase);

router.put('/:name', purchaseControllerr.updatePurchaseByName);

router.delete('/:title', purchaseControllerr.deletePurchaseByName);

module.exports = router;