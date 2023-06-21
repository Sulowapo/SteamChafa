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

const Game = mongoose.model('Game', userSchema);

module.exports = Game;