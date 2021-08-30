const Column = require('../models/column')

const column = {
    create: (req, res) => {
        const {body: {name}} = req;

        Column.create({name}, (err, obj) => {
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

    list: function(req, res) {
        const {params: {id: _id}} = req
        Column.findOne({_id}, (err, column) =>{
            
            if(err || !column) {
                return res.json({status:'error', message: 'no se ha podido cargar la columna', data: null});

            } else {
                return res.json({
                    status: 'success',
                    message: 'columna creada',
                    data: column
    
                });
            }


        })
    },
    
    
}

module.exports = column;