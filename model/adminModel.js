const { Schema, default: mongoose } = require('mongoose');

const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['manager', 'root']
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;