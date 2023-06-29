const { Schema, default: mongoose } = require('mongoose');

const gameSchema = new Schema({
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
    },
    genre: {
        type: String,
        required: true
    },
    dlcs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dlc'
    }]
});

function formatCurrency(value) {
    return value.toFixed(2);
}

function parseCurrency(value){
    return parseFloat(value);
}


const Game = mongoose.model('Game', gameSchema);

module.exports = Game;