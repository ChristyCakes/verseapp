import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import verseRouter from './verse';
import passagesRouter from './passages';
import userdataRouter from './userdata';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();
router.use('/users', usersRouter);
router.use('/verse', verseRouter)
router.use('/passages', passagesRouter)
router.use('/userdata', userdataRouter)

router.use('/auth', authRouter);

router.route('*')
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/classes', classesRouter);
router.use('/people', peopleRouter);

export default router;