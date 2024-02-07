const UsersModel = require('../models/users');
const getAllUser =  async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUser();

        res.json({
            message : "get all users success",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message : "Server Error",
            serverMessage : error,
        });
    }
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message : "create new users success",
        data: req.body
    });
}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message : "update users success",
        data: req.body
    });
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message : "delete users success",
        data: {
            id: idUser,
            name : "saady",
            email: "saady@gmail.com",
            addres : "depok"
        }
    });
}

module.exports = { 
    getAllUser, 
    createNewUser,
    updateUser,
    deleteUser
};