const mongoose = require('mongoose');
const bCrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const helpers = require('../helpers');
const {secret} = require('../../config/app').jwt;

const User = mongoose.model('User');
const Token = mongoose.model('Token');

const updateTokens = (userId) => {
    const accessToken = helpers.authHelper.generateAccessToken(userId);
    const refreshToken = helpers.authHelper.generateRefreshToken();

    return new Promise((resolve, reject) => {
        helpers.authHelper.replaceDbRefreshToken(refreshToken.id, userId)
            .then(() => {
                resolve({
                    accessToken,
                    refreshToken: refreshToken.token
                })
            })
            .catch(reject)
    })
};

const signIn = (req, res) => {
    const {name, password} = req.body;
    User.findOne({name})
        .exec()
        .then((user) => {
            if (!user) {
                res.status(401);
                res.json({message: 'User does not exist!'})
            }

            const isValid = bCrypt.compareSync(password, user.password);

            if (isValid) {
                updateTokens(user._id).then(tokens => res.json({
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken,
                    access: user.access
                }));
            } else {
                res.status(401).json({message: 'Invalid credentials!'});
            }
        })
        .catch(err => res.status(500).json({message: err.message, link: 'tyt'}))
};

const refreshTokens = (req, res) => {
    const {refreshToken} = req.body;
    let payload;
    try {
        payload = jwt.verify(refreshToken, secret);
        if (payload.type !== 'refresh') {
            res.status(400).json({message: 'Invalid token!'});
        }
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            res.status(400).json({message: 'Token expired!'});
            return;
        } else if (e instanceof jwt.JsonWebTokenError) {
            res.status(400).json({message: 'Invalid token!'});
            return;
        }
    }

    Token.findOne({tokenId: payload.id})
        .exec()
        .then(token => {
            if (token === null) {
                throw new Error('invalid token!');
            }

            return updateTokens(token.userId);
        })
        .then(tokens => res.json(tokens))
        .catch(err => res.status(400).json({message: err.message}));
};

module.exports = {
    signIn,
    refreshTokens
};