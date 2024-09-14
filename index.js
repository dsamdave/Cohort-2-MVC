const express = require("express")
const connectDB = require("./db")
const dotenv = require("dotenv").config()
const cors = require("cors")
const authRouter = require("./routes/authRoutes")
const { handleExaple } = require("./controllers/testCtrl")
const exampleRoutes = require("./routes/exampleRoutes")


const app = express()

app.use(express.json())
app.use(cors())


// DAtabaes

connectDB()

const PORT = process.env.PORT || 7000

app.listen(PORT, ()=>{
    console.log(`Server Started Running on Port ${PORT}`)
})


app.get("/", (req, res)=> {
    return res.status(200).json({message: "Welcome to our server."})
})


app.use("/api", authRouter)



app.use("/api", exampleRoutes)














app.use((req, res)=>{
    return res.status(200).json({message: "Sorry this endpoint does not exist."})

})