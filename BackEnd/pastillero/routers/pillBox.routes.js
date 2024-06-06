import { Router } from "express"; 
import { authRequired } from "../middlewares/ValidateToken.js";
import { addPillBox } from '../controllers/pillBox.controller.js'

const route = Router()

route.post('/addPillBox', authRequired, addPillBox)

export default route