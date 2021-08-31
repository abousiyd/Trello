const express = require('express');
const router = express.Router();
const {create, list, getDashboard, edit, deleteDashboard} = require('../controllers/dashboard');
const authUser = require('../middleware/authUser');

router.post('/create', authUser, create)
router.get('/list', authUser, list)
router.get('/:id', authUser, getDashboard)
router.put('/:id', authUser, edit)
router.delete('/:id', authUser, deleteDashboard)



module.exports = router;