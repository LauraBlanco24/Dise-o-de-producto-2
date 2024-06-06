import { Router } from "express"; 
import { login, register, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from "../middlewares/ValidateToken.js";

const route = Router()

route.post('/register', register)
route.post('/login', login)
route.post('/logout', logout)
route.get('/profile', authRequired, profile)

export default route