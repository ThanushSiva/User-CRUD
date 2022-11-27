const express = require("express")
const {
    home,
    createUser,
    readUser,
    updateUser,
    deleteUser
} = require("../Controllers/userController")
const router = express.Router();

router.get("/", home)
router.post("/createuser", createUser)
router.get("/readuser", readUser)
router.put("/updateuser/:id", updateUser)
router.delete("/deleteuser/:id", deleteUser)

module.exports = router;