const jwt = require('jsonwebtoken');
const { secret } = require('../../config/app').jwt;

module.exports = (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        res.status(401).json({message: 'Token not provided!'});
        return;
    }

    try {
        const payload = jwt.verify(token, secret);
        if (payload.type !== 'access') {
            res.status(401).json({message: 'Invalid token!'})
        }
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'Token expired!' });
            return;
        }
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'Invalid token!' });
            return;
        }
    }

    res.locals.token = token;
    next();
};
