const Purchase = require('../model/purchaseModel');

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
            return res.status(404).json({ error: 'Compra no encontrada' });
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
            return res.status(404).json({ error: 'Compra no encontrada' });
        }
        res.sendStatus(204);
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
