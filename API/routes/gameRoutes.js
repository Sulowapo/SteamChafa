const express = require('express');
const gameController = require('../controller/gameController');

const router = express.Router();

router.get('/', gameController.getGames);

router.post('/', gameController.createGame);

router.put('/:title', gameController.updateGameByTitle);

router.delete('/:title', gameController.deleteGameByTitle);

module.exports = router;
