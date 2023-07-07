const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {

    const authHeader = req.header('authorization');
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader)

    if (token == null) 
        return res.status(401).send('Token requerido')
    
    jwt.verify(token, 'SECRET', (err, user) => {
        if(err) return res.status(403).send('Token inválido');
        console.log(user);
        req.user = user;
        next()
    })
};

module.exports = authenticateJWT;