const Admin = require('../model/adminModel');

async function getAdmins(req, res) {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los administradores' });
    }
}

async function createAdmin(req, res) {
    const { name, email, password, role } = req.body;
    try {
        const admin = await Admin.create({ name, email, password, role });
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el administrador' });
    }
}

async function updateAdminByName(req, res) {
    const { name } = req.params;
    const { email, password, role } = req.body;
    try {
        const admin = await Admin.findOneAndUpdate(
        { name },
        { email, password, role },
        { new: true }
        );
        if (admin) {
        res.json(admin);
        } else {
        res.status(404).json({ error: 'Administrador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el administrador' });
    }
}

async function deleteAdminByName(req, res) {
    const { name } = req.params;
    try {
        const admin = await Admin.findOneAndDelete({ name });
        if (admin) {
        res.json({ message: 'Administrador eliminado correctamente' });
        } else {
        res.status(404).json({ error: 'Administrador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el administrador' });
    }
}

module.exports = {
  getAdmins,
  createAdmin,
  updateAdminByName,
  deleteAdminByName
};
