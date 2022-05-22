const express = require("express")
const Login = require("../controllers/login.controller")
const Router = express.Router()

Router.post("/",Login)
module.exports = Router