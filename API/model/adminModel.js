const { Schema, default: mongoose } = require('mongoose');

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['manager', 'root'],
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;