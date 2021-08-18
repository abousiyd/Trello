const mongoose = require('mongoose')

const {Schema, model} = mongoose

const DashboardSchema = new Schema({
    name:{
        type: String,
        trim: true,
        require: true
    }
})

module.exports = model('Dashboard', DashboardSchema)