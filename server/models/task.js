const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    user: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = model('Task', TaskSchema);