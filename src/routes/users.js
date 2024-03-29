const express = require('express');

const UserController = require('../controller/users');

const router = express.Router();

//create - post
router.post("/" , UserController.createNewUser);

//read - get
router.get("/" , UserController.getAllUser);

//update - patch
router.patch("/:idUser" , UserController.updateUser);

//delete - delete
router.delete("/:idUser" , UserController.deleteUser);



module.exports = router;