const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authUser');
const {create, edit, deleteTask} = require('../controllers/task');

router.post('/create',authUser, create)
router.put('/:id',authUser, edit);
router.delete('/:id',authUser, deleteTask)

module.exports = router;