import { Router } from "express"; 
import { authRequired } from "../middlewares/ValidateToken.js";
import { x } from '../controllers/pillBox.controller.js'

const route = Router()


export default route