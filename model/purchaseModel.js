const { Schema, default: mongoose } = require('mongoose');

const purchaseSchema = new Schema({
    date: Date,
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    }],
    amount: {
        type: Number,
        get: formatCurrency,
        set: parseCurrency
    },
    payment: {
        type: String,
        enum: ['balance', 'debitCard']
    }
});

function formatCurrency(value) {
    return value.toFixed(2);
}

function parseCurrency(value){
    return parseFloat(value);
}

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;