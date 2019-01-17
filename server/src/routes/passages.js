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

// delete request example (not currently used in the app)
router.delete('/:reference', async (req, res) => {
	try {
		PassagesController.del(req.params.reference, res)
	} catch (err) {
		console.log(err);
		res.sendStatus(500)
	}
})

router.post('/:document', async (req, res) => {
	try {
		PassagesController.post(req, res)
	} catch (err) {
		console.log(err);
		res.sendStatus(500)
	}
})

export default router;