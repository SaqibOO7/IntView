import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    credits: {
        type: Number,
        default: 100
    }
})

export const User = mongoose.model("User", userSchema)