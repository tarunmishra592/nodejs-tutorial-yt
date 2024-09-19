const Users = require('../models/users')

const handleGetAllUsers = async(req, res) => {
    const allUsers = await Users.find({})
    res.status(200).json({status: true, result: allUsers})
}

const handleCreateUser =  async(req, res) => {
    console.log(req.body)
    const { firstName, lastName, email, mobile, message } = req.body;
    if(!firstName || !email || !mobile || !message){
        return res.status(400).json({ success: false, message: "Mandatory fields are not filled."  });
    }

    const result = await Users.create({ firstName, lastName, email, mobile, message })

    return res.status(201).json({ success: true, result })
}

const handleGetUserByID = async (req, res) => {
    const user = await Users.findById(req.params.id)
    if(!user){
        res.status(400).json({status: false, message: 'User not available'})
    }
    return res.status(200).json({status: true, result: user})
}

const handleUpdateUserById = async (req, res) => {
    const { firstName, lastName} = req.body;
    const result = await Users.findByIdAndUpdate(req.params.id, {
        firstName,
        lastName,
    })
    return res.status(200).json({status: true, result: result})
}

const handleDeleteUserById = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id)
    return res.status(200).json({ status: true, message: "User Deleted" })
}

const handleShowAllUsers = async (req, res) => {
    const allUsers = await Users.find({})
    return res.render('allusers', {
        users: allUsers
    })

}

module.exports = {
    handleGetAllUsers,
    handleCreateUser,
    handleGetUserByID,
    handleUpdateUserById,
    handleDeleteUserById,
    handleShowAllUsers
}