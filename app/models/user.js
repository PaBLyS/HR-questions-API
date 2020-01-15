const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    password: String,
    access: Boolean
});

mongoose.model('User', UserSchema);