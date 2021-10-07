const express = require('express')
const router = express.Router();
const {register, login, list} = require('../controllers/auth')


router.post('/register', register)
router.post('/login', login)
router.get('/list/:name', list)


module.exports = router;