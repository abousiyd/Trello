const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const dashboard = require('./routes/dashboard')
const routerAuth = require('./routes/auth');
const column = require('./routes/column')
const task = require('./routes/task')



require('./config/database');
app.use(cors())


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/auth', routerAuth)
app.use('/api/dashboard', dashboard)
app.use('/api/column', column)
app.use('/api/task', task)


app.listen(4000, () =>{
    console.log('server up on 4000')
})
