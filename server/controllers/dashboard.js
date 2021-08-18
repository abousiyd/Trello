const Dashboard = require('../models/dashboard')

const dashboard = {
    create: (req, res) => {

        const {body: {name}} = req;

        Dashboard.create({name}, (err, obj) => {
            if(err) {
                return res.json({status:'error', message: 'no se ha creado la tabla', data:null});
            }else{
                return res.json({
                    status: 'success',
                    message: 'tabla creada',
                    data: null
    
                });
            }
        })
    },
    list: (req, res) => {
        Dashboard.find({}, (err, tablas) => {

            if(err || !tablas) {
                return res.json({status:'error', message: 'no se han podido listar las tablas', data:null});
            } else {
                return res.json({
                    status: 'success',
                    message: 'tablas listadas',
                    data: tablas
                })
            }
        })
    },
    getDashboard: (req, res) => {
        const {params: {id: _id}} = req;
        Dashboard.findOne({_id}, (err, tabla) => {
            if (err || !tabla) {
                return res.json({status:'error', message:'no has podido cargar la tabla', data:null})
            } 
            res.json({
                status: 'success',
                message: 'tabla cargada',
                data: tabla
            })
        })
    },
    edit: (req, res) => {
        const {body: {name}, params: {id: _id}} = req;
        Dashboard.findByIdAndUpdate(_id, {name}, {new: true}, (err, tabla) => {
            if(err || !tabla) {
                return res.json({status:'error', message:'no has podido editar la tabla', data:null})
            }
            res.json({
                status: 'success',
                message: 'tabla editada',
                data: tabla
            })
        })
    },
    deleteDashboard: (req, res) => {
        const {params: {id: _id}} = req
        Dashboard.findByIdAndRemove(_id, (err) => {
            if(err) {
                return res.json({status:'error', message:'no has podido eliminar la tabla', data:null})
            }
            res.json({
                status: 'success',
                message: 'tabla eliminada',
                data: null
            })
        })
    }
    
}

module.exports = dashboard;