const { Schema, default: mongoose } = require('mongoose');

const dlcSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
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