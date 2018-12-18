import { Router } from 'express';
//import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import PassagesController from '../controllers/passages';

let router = Router();

router.get('/:document', (req, res) => {
	PassagesController.get(req.params.document, res)
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

export default router;