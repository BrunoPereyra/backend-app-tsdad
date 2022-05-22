const express = require("express")
const Router = express.Router()
const OperationalPost = require("../controllers/operationalPost.controllers")

Router.post("/",OperationalPost)
module.exports = Router
