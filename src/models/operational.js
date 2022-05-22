const { Schema, model } = require("mongoose")

const OperationalSchema = new Schema({
    Trade: String,
    EntryDate: String,
    ExitDate: String,
    Symbol: String,
    Direction: String,
    EntryPrice: String,
    PositionSize: String,
    Risk: String,
    idUser:String,
    ProfitandLoss: String,
    StopLoss: String,
    TakeProfit: String,
    ExitPrice: String,
    Fees: String,
    leverage: String,
    date: Date
})
const Operationals = model("Operationals", OperationalSchema)
module.exports = Operationals