const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

UserSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = model('User', UserSchema);

