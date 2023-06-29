const Game = require('../model/gameModel');
const CustomeError = require('../utils/CustomeError');

async function getGames(req, res) {
  try {
    // .populate('dlcs') ------- Esto va despues del .find() se quita temporalmente porque era necesario que los
    // juegos tuvieran un dlc si no lo tenian no devolvia ningun juego.
    const games = await Game.find();
      res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los juegos' });
  }
}

async function createGame(req, res) {
  const { title, description, price, genre, dlcs } = req.body;
  try {
    const game = await Game.create({ title, description, price, genre, dlcs });
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el juego' });
  }
}

async function updateGameByTitle(req, res) {
  const { title } = req.params;
  const { description, price, genre } = req.body;
  try {
    const game = await Game.findByIdAndUpdate({ title },
      { title, description, price, genre },
      { new: true }
    );
    if (game) {
      res.json(game);
    } else {
      const error = new CustomeError('Compra no encontrado', 404);
      return next(error);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el juego' });
  }
}

async function deleteGameByTitle(req, res) {
  const { title } = req.params;
  try {
    const game = await Game.findByIdAndDelete({ title });
    if (game) {
      res.json({ message: 'Juego eliminado correctamente' });
    } else {
      const error = new CustomeError('Compra no encontrado', 404);
      return next(error);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el juego' });
  }
}

module.exports = {
  getGames,
  createGame,
  updateGameByTitle,
  deleteGameByTitle
};
