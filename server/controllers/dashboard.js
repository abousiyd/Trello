const Dashboard = require('../models/dashboard')
const mongoose = require('mongoose')

const dashboard = {
    create: (req, res) => {
        const {body: {name, users = [], columns = []}, user: {id: userId}} = req;

        const user = userId
        users.push(userId)

        Dashboard.create({name, user , users, columns}, (err, obj) => {
            if(err) {
                return res.json({status:'error', message: 'No se ha creado la tabla', data:null});
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
        Dashboard.find({})
        .populate('user')
        .populate('users')
        .populate('columns')
        .populate({ path: 'columns', populate: { path: 'tasks' }})
        .exec((err, tablas) => {

            if(err || !tablas) {
                return res.json({status:'error', message: 'No se han podido listar las tablas', data:null});
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
                return res.json({status:'error', message:'No has podido cargar la tabla', data:null})
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
                return res.json({status:'error', message:'No has podido editar la tabla', data:null})
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
                return res.json({status:'error', message:'No has podido eliminar la tabla', data:null})
            }
            res.json({
                status: 'success',
                message: 'tabla eliminada',
                data: null
            })
        })
    },
    updateDashUsers: (req, res) => {
        const {params: {dashId: _id, userId}} = req
        Dashboard.findOne({_id}, (err, dash) => {
            if(err || !dash) {
                return res.json({status:'error', message: 'Usuario bo9lwat', data:null});
            } 

            const userIdObj = mongoose.Types.ObjectId(userId)

            let users = dash.users

            if (users.includes(userIdObj)) {
                users = dash.users.filter(user_id => user_id.toString() !== userId)
            } else {
                users.push(userIdObj)
            }
        
            Dashboard.findByIdAndUpdate(_id, {users}, {new: true}, (err, tabla) => {
                if(err || !tabla) {
                    return res.json({status:'error', message:'No has podido editar la tabla', data:null})
                }
                res.json({
                    status: 'success',
                    message: 'tabla editada',
                    data: tabla
                })
            })
        })
    }
    
}

module.exports = dashboard;