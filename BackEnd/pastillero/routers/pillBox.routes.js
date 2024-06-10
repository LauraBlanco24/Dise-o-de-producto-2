import { Router } from "express"; 
import { authRequired } from "../middlewares/ValidateToken.js";
import { addPillBox, getPillBox, getPillBoxes} from '../controllers/pillBox.controller.js'

const route = Router()

route.get('/getPillBox/:id', authRequired, getPillBox)
route.get('/getPillBoxes', authRequired, getPillBoxes)
route.post('/addPillBox', authRequired, addPillBox)

export default route