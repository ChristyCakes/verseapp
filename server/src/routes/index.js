import { Router } from 'express';
import passagesRouter from './passages';
import userdataRouter from './userdata';

let router = Router();
router.use('/passages', passagesRouter)
router.use('/userdata', userdataRouter)

export default router;