const { Schema, default: mongoose } = require('mongoose');

const gameSchema = new Schema({
    title: String,
    description: String,
    price: {
        type: Number,
        get: formatCurrency,
        set: parseCurrency
    },
    genre: String,
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