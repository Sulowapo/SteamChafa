const Purchase = require('../model/purchaseModel');
const CustomeError = require('../utils/CustomeError');

async function getAllPurchases(req, res) {
    try {
        const purchases = await Purchase.find().populate('games');
        res.json(purchases);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las compras' });
    }
}

async function createPurchase(req, res) {
    const { date, games, amount, payment } = req.body;
    try {
        const purchase = new Purchase({
            date,
            games,
            amount,
            payment
        });
        await purchase.save();
        res.status(201).json(purchase);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la compra' });
    }
}

async function updatePurchaseByName(req, res) {
    const { name } = req.params;
    const { date, games, amount, payment } = req.body;
    try {
        const purchase = await Purchase.findOneAndUpdate(
            { name },
            { date, games, amount, payment },
            { new: true }
        ).populate('games');
        if (!purchase) {
            const error = new CustomeError('Compra no encontrado', 404);
            return next(error);
        }
        res.json(purchase);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la compra' });
    }
}

async function deletePurchaseByName(req, res) {
    const { name } = req.params;
    try {
        const purchase = await Purchase.findOneAndDelete({ name });
        if (!purchase) {
            const error = new CustomeError('Compra no encontrado', 404);
            return next(error);
        }else{
            res.json({ message: 'Usuario eliminado correctamente' });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la compra' });
    }
}

module.exports = {
    getAllPurchases,
    createPurchase,
    updatePurchaseByName,
    deletePurchaseByName
};
