import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())


//import routes
import authRouter from './routes/auth.route.js'

app.use("/api/v1/auth", authRouter)







connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection error:", error)
})
