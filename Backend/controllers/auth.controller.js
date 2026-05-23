import User from "../models/user.model.js"
import generateToken from "../config/token.js"

const googleAuth = async () => {
    try {

        const {name, email} = req.body
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name,
                email
            })
        }
        let token = await generateToken(user._id)
        res.cookie("token", token, {
            http: true,
            secure: false, 
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)
        
    } catch (error) {
        return res.status(500).json({message: `Google auth error ${error}`})
    }
}

const logOut = async () => {
    try {
        
        await res.clearCookie("token")
        res.status(200).json({message: "Logout successfully"})
    } catch (error) {
        return res.status(500).json({message: `Logout Error ${error}`})
    }
}

export {
    googleAuth,
    logOut
}