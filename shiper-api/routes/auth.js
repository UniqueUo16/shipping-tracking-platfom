const express = require("express")
const {register, login, getUser, logout} = require("../controllers/authController.js")

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", getUser)
router.get("/logout", logout)

module.exports = router;
