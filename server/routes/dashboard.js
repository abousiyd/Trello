const express = require('express');
const router = express.Router();
const {create, list, getDashboard, edit, deleteDashboard} = require('../controllers/dashboard');
const authUser = require('../middleware/authUser');

router.post('/create', authUser, create)
router.get('/list', list)
router.get('/:id', getDashboard)
router.put('/:id', edit)
router.delete('/:id', deleteDashboard)



module.exports = router;