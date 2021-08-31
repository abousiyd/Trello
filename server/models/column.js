const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const ColumnSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }, 
    tasks: {
        type: [{type: Schema.Types.ObjectId, ref: 'Task'}],
        require: true
    }

});

module.exports = model('Column', ColumnSchema);