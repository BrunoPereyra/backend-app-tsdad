const express = require("express")
const Signup = require("../controllers/signup.controller")
const Router = express.Router()


Router.post("/",Signup)
module.exports = Router