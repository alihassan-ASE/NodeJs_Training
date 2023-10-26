const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getSingleUser,
    addUser,
    updateUser,
    deleteUser
} = require('../controllers/users');

router.get('/', getAllUsers)

router.route('/:ID')
.get(getSingleUser)
.patch(updateUser)
.delete(deleteUser)


router.post('/', addUser)

module.exports = router;