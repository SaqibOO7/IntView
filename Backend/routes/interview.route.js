import {Router} from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import { analyzeResume } from '../controllers/interview.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'


const router = Router()

router.route('/resume').post(isAuthenticated, upload.single("resume") ,analyzeResume)



export default router