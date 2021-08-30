const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const ColumnSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }

});

module.exports = model('Column', ColumnSchema);