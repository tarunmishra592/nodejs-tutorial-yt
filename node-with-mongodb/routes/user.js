const express = require('express')
const Users = require('../models/users')

const { handleGetAllUsers, handleCreateUser, handleGetUserByID, handleUpdateUserById, handleDeleteUserById, handleShowAllUsers } = require('../controllers/user')


const router = express.Router()


router.get('/', handleGetAllUsers)
router.post('/create', handleCreateUser)
router.get('/:id', handleGetUserByID)
router.patch('/:id', handleUpdateUserById)
router.delete('/:id', handleDeleteUserById)





module.exports = router