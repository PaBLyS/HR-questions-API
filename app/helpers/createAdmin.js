const mongoose = require('mongoose');
const bCrypt = require('bcrypt-nodejs');

const User = mongoose.model('User');

async function create() {
    let user = await User.find()
    if (user.length < 1) {
        let password = bCrypt.hashSync('qwerty123')
        User.create({
            name: 'admin',
            password: password,
            access: true
        })
    }
}

module.exports = {
    create
}