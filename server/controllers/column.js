const Column = require('../models/column')

const column = {
    create: (req, res) => {
        const {body: {name, tasks = []}} = req;

        Column.create({name,tasks}, (err, obj) => {
            if(err) {
                return res.json({status:'error', message: 'no se ha creado la columna', data:null});
            }else{
                return res.json({
                    status: 'success',
                    message: 'tabla creada',
                    data: null
    
                });
            }
        })
    },

    list: function(req, res, next) {
        Column.find({})
        .populate('user')
        .exec(function(err, data) {
                if (err) return res.json({status:'error', message:'no se han cargado las columnas', data:null})
                return res.json({
                    status: 'success',
                    message: 'columnas cargadas',
                    data 
                });
            });
        },


    // list: function(req, res) {
    //     const {params: {id: _id}} = req
    //     Column.find({_id}, (err, column) =>{
            
    //         if(err || !column) {
    //             return res.json({status:'error', message: 'no se ha podido cargar la columna', data: null});

    //         } else {
    //             return res.json({
    //                 status: 'success',
    //                 message: 'columna cargadas',
    //                 data: column
    
    //             });
    //         }
    //     })
    // },

    deletecolumn: (req, res) => {
        const {params: {id: _id}, params} = req
        Column.findByIdAndRemove(_id, (err, data) => {
            if(err) return res.json({status:'error', message:'no has podido eliminar la columna', data:null})
            
            res.json({
                status: 'success',
                message: 'columna eliminada',
                data: data
            })
        })
    },

    edit: function(req, res) {
        const {body: {name}, params: {id: _id}} = req;
            Column.findByIdAndUpdate(_id, {name}, {new: true}, (err, data) => {
                if (err) return res.json({status:'error', message:'no has podido editar la columna', data:null})
            return res.json({
                status: 'success',
                message: 'columna editada',
                data: data
            });
        
        })
    },
}

module.exports = column;