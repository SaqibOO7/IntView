import {Router} from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import { analyzeResume, finishInterview, generateQuestions, submitAnswer } from '../controllers/interview.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'


const router = Router()

router.route('/resume').post(isAuthenticated, upload.single("resume") ,analyzeResume)
router.route('/generate-questions').post(isAuthenticated, generateQuestions)
router.route('/submit-answer').post(isAuthenticated, submitAnswer)
router.route('/finish').post(isAuthenticated, finishInterview)



export default router