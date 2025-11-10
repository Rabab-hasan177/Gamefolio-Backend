const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const UserRouter = require('./routes/UserRouter')
const GameRouter = require('./routes/GameRouter')

const PORT = process.env.PORT || 3000

const db = require("./db")
const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))

const path = require("path")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static('public'))

app.use('/User', UserRouter)
app.use('/Game', GameRouter)


app.listen(PORT, () => {
  console.log(`Running Server on Port ${PORT} . . . `)
})
