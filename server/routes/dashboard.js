const express = require('express');
const router = express.Router();
const {create, list, getDashboard, edit, deleteDashboard} = require('../controllers/dashboard')

router.post('/create', create)
router.get('/list', list)
router.get('/:id', getDashboard)
router.put('/:id', edit)
router.delete('/:id', deleteDashboard)



module.exports = router;