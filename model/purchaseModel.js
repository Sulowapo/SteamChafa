const { Schema, default: mongoose } = require('mongoose');

const purchaseSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    }],
    amount: {
        type: Number,
        required: true,
        get: formatCurrency,
        set: parseCurrency
    },
    payment: {
        type: String,
        enum: ['balance', 'debitCard'],
        required: true
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