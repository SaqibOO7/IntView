import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 6000

app.get('/', (req, res) => {
    return res.json({ message: "Server started" })
})



connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on PORT ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection error:", error)
})
