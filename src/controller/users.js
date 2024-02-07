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

const createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUser(body);
        res.json({
            message : "create new users success",
            data: body
        });
    } catch (error) {
        res.status(500).json({ 
            message : "Server Error",
            serverMessage : error,
        });
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await  UsersModel.updateUser(body, idUser);
        res.json({
            message : "update users success",
            data: {
                id: idUser,
                ...body
            },
        });
    } catch (error) {
        res.status(500).json({ 
            message : "Server Error",
            serverMessage : error,
        });
    }
}

const deleteUser =  async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message : "delete users success",
            data: null
        });
    } catch (error) {
        res.status(500).json({ 
            message : "Server Error",
            serverMessage : error,
        });
    }
}

module.exports = { 
    getAllUser, 
    createNewUser,
    updateUser,
    deleteUser
};