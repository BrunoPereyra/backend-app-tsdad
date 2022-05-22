const Operationals = require("../models/operational")

const OperationalGet = async (req, ress) => {
    const idUser = req.idUser
    const Operational = await Operationals.find({ idUser })
    if (Operational) {
        ress.json({
            ress: Operational
        }).status(204)
    }else{
        ress.status(204).json({
            ress: "user no encontrado o sin operaciones actuales"
        })
    }
}
module.exports = OperationalGet