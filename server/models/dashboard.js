const mongoose = require('mongoose')

const {Schema, model} = mongoose

const DashboardSchema = new Schema({
    name:{
        type: String,
        trim: true,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    users: {
        type: [{type: Schema.Types.ObjectId, ref: 'User'}],
        require: true
    },
    columns: {
        type: [{type: Schema.Types.ObjectId, ref: 'Column'}],
        require: true
    }

})

module.exports = model('Dashboard', DashboardSchema)