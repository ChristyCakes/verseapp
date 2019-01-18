import { Router } from 'express';
import PassagesController from '../controllers/passages';

let router = Router();

router.get('/:document', async (req, res) => {
	try {
		await PassagesController.get(req.params.document, res)
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
})

// delete request example (not currently used in the app)
router.delete('/:reference', async (req, res) => {
	try {
		await PassagesController.del(req.params.reference, res)
	} catch (err) {
		console.log(err);
		res.sendStatus(500)
	}
})

// post request example (not currently used in the app)
router.post('/:document', async (req, res) => {
	try {
		await PassagesController.post(req, res)
	} catch (err) {
		console.log(err);
		res.sendStatus(500)
	}
})

export default router;