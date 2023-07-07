const Admin = require('../model/adminModel');
const CustomeError = require('../utils/CustomeError');

async function getAdmins(req, res) {
    try {
        const admins = await Admin.find();
        res.status(200).json({
            status: 'sucess',
            data: {
                admins
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los administradores' });
    }
}

async function createAdmin(req, res, next) {
    const { name, email, password, role } = req.body;
    try {
        if( name!=undefined && email!=undefined && password!=undefined && role!=undefined ){
            const admin = await Admin.create({ name, email, password, role });
            res.status(201).json({
                status: 'sucess',
                message: 'Administrador registrado correctamente',
                data: {
                    admin
                }
            });
        }
        else{
            const error = new CustomeError('Faltan parametros', 400);
            return next(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function updateAdminByName(req, res, next) {
    const { name } = req.params;
    const { email, password, role } = req.body;
    try {
        if( name!=undefined && email!=undefined && password!=undefined && role!=undefined ){
            const admin = await Admin.findOneAndUpdate(
                { name },
                { email, password, role },
                { new: true }
            );
            if (admin) {
                res.status(200).json({
                    status: 'sucess',
                    message: 'Administrador actualizado correctamente',
                    data:admin});
            } else {
                const error = new CustomeError('Administrador no encontrado', 404);
                return next(error);
            }
        }
        else{
            const error = new CustomeError('Faltan parametros', 400);
            return next(error);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el administrador' });
    }
}

async function deleteAdminByName(req, res, next) {
    const { name } = req.params;
    try {
        if(name != undefined){
            const admin = await Admin.findOneAndDelete({ name });
            if (admin) {
                res.status(200).json({ 
                    status: 'sucess', 
                    message: 'Administrador eliminado correctamente' 
                });
            } else {
                const error = new CustomeError('Administrador no encontrado', 404);
                return next(error);
            }
        }
        else{
            const error = new CustomeError('Faltan parametros', 400);
            return next(error);
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