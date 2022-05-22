const { Schema,model } = require("mongoose")

const UserSchema = new Schema({
    nameUser: String,
    passwordHash: String
})

const Users = model("users",UserSchema)
module.exports = Users