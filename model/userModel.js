const { Schema, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    level: Number,
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;