const bcrypt = require("bcrypt")
const Users = require("../models/users")

const Signup = async (req, ress) => {
    const { password, nameUser } = req.body
    const userRepeat = await Users.findOne({ nameUser })

    if (!password || !nameUser) {
        ress.status(400).send("missing password or nameUser")
    } else if (userRepeat) {
        ress.json({
            ress: "user repeat"
        })
    } else if (!userRepeat && password && nameUser) {
        const passwordHash = await bcrypt.hash(password, 10)
        const user = await new Users({
            nameUser,
            passwordHash
        })
        await user.save()
        ress.status(200).json({
            res: "user save"
        })

    } else {
        ress.status(404).json({
            res: "faliles,new user"
        })
    }
}
module.exports = Signup