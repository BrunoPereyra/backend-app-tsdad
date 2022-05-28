require("dotenv").config()
require("./db")
const express = require("express")
const app = express()
const cors = require("cors")
// const morgan = require("morgan")

const handleErrors = require("./middleware/handleErrors")
const useExtractor = require("./middleware/useExtractor")
const notFound = require("./middleware/notFound")
const { PORT } = process.env

// app.use(morgan("dev"))

app.use(express.json())
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))

app.use("/signup", require("./routers/signup.routes"))
app.use("/login", require("./routers/login.routes"))
app.use("/operationalGet", useExtractor, require("./routers/operationalGet.routes"))
app.use("/operationalPost", useExtractor, require("./routers/operationalPost.routes"))

app.use(notFound)
app.use(handleErrors)

app.listen(PORT, () => {
    console.log(`server listening in ${PORT}`);
})