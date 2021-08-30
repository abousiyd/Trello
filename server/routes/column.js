const express = require('express');
const router = express.Router();
const {create, list} = require('../controllers/column');

router.post('/create', create)
router.get('/:id', list)
// router.get('/:id', getDashboard)
// router.put('/:id', edit)
// router.delete('/:id', deletecolumn)



module.exports = router;