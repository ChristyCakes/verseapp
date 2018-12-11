import { Router } from 'express';
//import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import PassagesController from '../controllers/passages';

let router = Router();

router.get('/', (req, res) => {
	PassagesController.getAll(req, res)
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

export default router;