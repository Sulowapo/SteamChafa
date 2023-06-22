const Dlc = require('../model/dlcModel');

async function getDlcs(req, res) {
  try {
    const dlcs = await Dlc.find();
    res.json(dlcs);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los DLCs' });
  }
}

async function createDlc(req, res) {
  const { title, description, price } = req.body;
  try {
    const dlc = await Dlc.create({ title, description, price });
    res.status(201).json(dlc);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el DLC' });
  }
}

async function updateGameByTitle(req, res) {
  const { title } = req.params;
  const { description, price } = req.body;
  try {
    const dlc = await Dlc.findByIdAndUpdate({ title },
      { title, description, price },
      { new: true }
    );
    if (dlc) {
      res.json(dlc);
    } else {
      res.status(404).json({ error: 'DLC no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el DLC' });
  }
}

async function deleteGameByTitle(req, res) {
  const { title } = req.params;
  try {
    const dlc = await Dlc.findByIdAndDelete({ title });
    if (dlc) {
      res.json({ message: 'DLC eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'DLC no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el DLC' });
  }
}

module.exports = {
  getDlcs,
  createDlc,
  updateGameByTitle,
  deleteGameByTitle
};
