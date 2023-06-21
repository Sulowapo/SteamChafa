const { Schema, default: mongoose } = require('mongoose');

const dlcSchema = new Schema({
    title: String,
    description: String,
    price: {
        type: Number,
        get: formatCurrency,
        set: parseCurrency
    }
});

function formatCurrency(value) {
    return value.toFixed(2);
}

function parseCurrency(value){
    return parseFloat(value);
}

const Dlc = mongoose.model('Dlc', dlcSchema);

module.exports = Dlc;