import { Router } from 'express';
// import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import VerseController from '../controllers/verse';

let router = Router();

router.get('/', (req, res) => {
	VerseController.getAll(req, res)
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

router.post('/', (req, res) => {
    VerseController.add(req.body, res)
        .catch(e => {
            console.log(e);
            res.sendStatus(500)
        })
})

export default router;