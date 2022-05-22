const Operationals = require("../models/operational")

const OperationalPost = async (req, ress) => {
    const {
        Trade,
        EntryDate,
        ExitDate,
        Symbol,
        Direction,
        EntryPrice,
        PositionSize,
        StopLoss,
        TakeProfit,
        ExitPrice,
        Fees,
        ProfitandLoss,
        leverage,
        Risk
    } = req.body
    const idUser = req.idUser

    if (
        Trade &&
        EntryDate &&
        ExitDate &&
        Symbol &&
        Direction &&
        EntryPrice &&
        PositionSize &&
        StopLoss &&
        TakeProfit &&
        ExitPrice &&
        Fees &&
        ProfitandLoss &&
        leverage &&
        Risk
    ) {
        console.log("aaa");
        const Operational = await new Operationals({
            Trade,
            EntryDate,
            ExitDate,
            Symbol,
            Direction,
            EntryPrice,
            PositionSize,
            StopLoss,
            TakeProfit,
            ExitPrice,
            Fees,
            ProfitandLoss,
            leverage,
            Risk,
            idUser,
            date: new Date()
        })
        await Operational.save()
        ress.status(201).json({
            Operational
        })
    
    } else {
        ress.status(400).json({
            ress:"algo salio mal"
        })
    }
}
module.exports = OperationalPost