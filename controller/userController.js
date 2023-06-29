//:D                             >:(
const User = require('../model/userModel');
const CustomeError = require('../utils/CustomeError');
async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}

async function createUser(req, res) {
    const { name, email, password, level } = req.body;
    try {
        const user = await User.create({ name, email, password, level });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}

async function updateUserByName(req, res) {
    const { name } = req.params;
    const { email, password, level } = req.body;
    try {
        const user = await User.findOneAndUpdate(
            { name },
            { email, password, level },
            { new: true }
        );
        if (user) {
            res.json(user);
        } else {
            const error = new CustomeError('Usuario no encontrado', 404);
            return next(error);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
}

async function deleteUserByName(req, res) {
    const { name } = req.params;
    try {
        const user = await User.findOneAndDelete({ name });
        if (user) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            const error = new CustomeError('Usuario no encontrado', 404);
            return next(error);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
}


module.exports = {
    getUsers,
    createUser,
    updateUserByName,
    deleteUserByName
};
