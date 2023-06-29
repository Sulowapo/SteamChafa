const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {

    const bearerHeader = req.header('Authorization');

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403)
    }

    // try {
    //     const decoded = jwt.verify(token, 'SECRET');
    //     req.user = decoded.user;
    //     next();
    // } catch (error) {
    //     res.status(401).json({
    //         error: 'Token invalido'
    //     });
    // }

};

module.exports = authenticateJWT;