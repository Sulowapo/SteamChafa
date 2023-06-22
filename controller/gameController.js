const Game = require('../model/gameModel');

async function getGames(req, res) {
  try {
    const games = await Game.find().populate('dlcs');
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los juegos' });
  }
}

async function createGame(req, res) {
  const { title, description, price, genre } = req.body;
  try {
    const game = await Game.create({ title, description, price, genre });
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
      res.status(404).json({ error: 'Juego no encontrado' });
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
      res.status(404).json({ error: 'Juego no encontrado' });
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
