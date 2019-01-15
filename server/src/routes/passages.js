import { Router } from 'express';
import PassagesController from '../controllers/passages';

let router = Router();

router.get('/:document', async (req, res) => {
	try {
		PassagesController.get(req.params.document, res)
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
})

export default router;