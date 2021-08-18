const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Auth = {
    register: function(req, res) {

        const {body: {name, email, password}} = req;

        User.findOne({email}, (err, user) => {
            if(err || user) {
                return res.json({status:'error', message: 'usuario ya existe', data:null});
            }

            User.create({name, email, password}, function(err, result) {
                if (err) return res.json({status:'error', message: 'no se ha podido registrar', data:null});
                res.json({
                    status: 'success',
                    menssage: 'usuario agregado',
                    data: null
    
                });
            });  
        })


    },

    login: function(req, res){

        const {body: {email, password}} = req
        
        User.findOne({email}, function(err, user) {
            if (err || !user ) {
                return res.json({status:'error', message: 'usuario no existe', data: null});
            }

            if (bcrypt.compareSync(password, user.password)) {

                const token = jwt.sign({id: user._id}, '123', { expiresIn: '1h' });

                return res.json({status:'success', message: 'logeado', data:{user, token}});
            }
           return res.json({status:'error', message: 'credenciales invalidos', data:null});
        })
    }
}

module.exports = Auth;