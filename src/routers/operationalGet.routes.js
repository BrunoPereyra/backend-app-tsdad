const express = require("express")
const Router = express.Router()
const OperationalGet = require("../controllers/operationalGet.controllers")

Router.get("/",OperationalGet)
module.exports = Router