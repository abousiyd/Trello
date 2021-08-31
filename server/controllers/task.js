const Task = require('../models/task')

const task = {
    create: function(req, res) {

        const {body: {title, description}, user: {id: userId}} = req;
        const user = userId

        Task.create({title, description, user}, function(err, result) {
            
            if (err) return res.json({status:'error', message: 'no se ha creado la tasca', data:null});
            return res.json({
                status: 'success',
                message: 'tasca creada',
                data: null

            });
        });  
    },

    edit: (req, res) => {
        const {body: {title, description}, params: {id: _id}} = req;
        Task.findByIdAndUpdate(_id, {title, description}, {new: true}, (err, task) => {
            if(err || !task) {
                return res.json({status:'error', message:'no has podido editar la tasca', data:null})
            }
            res.json({
                status: 'success',
                message: 'taska editada',
                data: task
            })
        })
    },
    deleteTask: function(req, res, next) {
        const {params: {id: _id}} = req;
        Task.deleteOne({ _id }, function(err,data) {
            if (err) return res.json({status:'error', message:'no has podido eliminar la tasca', data:null})
            return res.json({
                status: 'success',
                message: 'tasca eliminada',
                data 
            })
        })
    },   
}

module.exports = task;