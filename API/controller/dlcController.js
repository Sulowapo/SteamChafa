const Dlc = require('../model/dlcModel');
const CustomeError = require('../utils/CustomeError');

async function getDlcs(req, res) {
  try {
    const dlcs = await Dlc.find();
    res.status(200).json({status: 200, data: dlcs});
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los DLCs' });
  }
}

async function createDlc(req, res) {
  const { title, description, price } = req.body;
  try {
    if( title!=undefined && description!=undefined && price!=undefined){
      const dlc = await Dlc.create({ title, description, price });
      res.status(201).json(dlc);
    }
    else{
      const error = new CustomeError('Faltan parametros', 400);
      return next(error);
  }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el DLC' });
  }
}

async function updateDlcByTitle(req, res) {
  const { title } = req.params;
  const { description, price } = req.body;
  try {
    if( title!=undefined && description!=undefined && price!=undefined){
      const dlc = await Dlc.findByIdAndUpdate({ title },
        { title, description, price },
        { new: true }
      );
      if (dlc) {
        res.status(200).json({status: 200, data: dlc});
      } else {
        const error = new CustomeError('DLC no encontrado', 404);
        return next(error);
      }
    }
    else{
      const error = new CustomeError('Faltan parametros', 400);
      return next(error);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el DLC' });
  }
}

async function deleteDlcByTitle(req, res) {
  const { title } = req.params;
  try {
    if( title!=undefined ){
      const dlc = await Dlc.findByIdAndDelete({ title });
      if (dlc) {
        res.status(200).json({ status: 200, message: 'DLC eliminado correctamente' });
      } else {
        const error = new CustomeError('DLC no encontrado', 404);
        return next(error);
      }
    }
    else{
      const error = new CustomeError('Faltan parametros', 400);
      return next(error);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el DLC' });
  }
}

module.exports = {
  getDlcs,
  createDlc,
  updateDlcByTitle,
  deleteDlcByTitle
};