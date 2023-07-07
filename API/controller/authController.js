const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const { json } = require('express');

const register = async (req, res) => {
    const { name, email, password, level } = req.body;

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                error: 'El usuario ya está registrado'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            level
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            error: 'Error al crear usuario'
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        console.log(JSON.stringify(user));

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { user: user._id, email: user.email},
            'SECRET',
            { expiresIn: '1h' }
        );

        const name = user.name;
        res.json({ name, email, token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
}

module.exports = {
    register,
    login
}