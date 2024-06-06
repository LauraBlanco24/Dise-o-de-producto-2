import jwt from "jsonwebtoken"
import { TOKEN_SECRET_KEY } from "../config.js"

export const authRequired = (req, res, next) => {
    const { accessToken } = req.cookies
    if (!accessToken) return res.status(400).json({ message: "No token", type: "Error" })
    jwt.verify(accessToken, TOKEN_SECRET_KEY, (err, dataDecoded) => {
        if (err) return res.status(403).json({ message: "Token Invalido", type: "Error" })
       console.log(dataDecoded)
        req.user = dataDecoded
    })
    next()
}