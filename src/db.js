require("colors")
const mongoose = require("mongoose")
const { db } = process.env

mongoose.connect(db)
    .then(()=> console.log(`db on`.bgBlue.white.bold))
    .catch(error => console.log(error))