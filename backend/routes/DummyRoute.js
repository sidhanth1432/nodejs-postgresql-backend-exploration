import express from 'express'
import {Authenticate} from '../middleware/index.js'
import {get_users_controller} from '../controller/index.js'
const router=express.Router();


router.use(Authenticate);
router.get("/",get_users_controller)


export {router as DummyRoute};