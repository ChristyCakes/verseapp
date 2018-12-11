import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import UsersController from '../controllers/users';

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
	res.json(req.user);
});

router.get('/', (req, res) => {
	UsersController.getAll(req, res)
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

// router.get('/:id', (req, res) => {
// 	const id = req.params.id

// 	Profile.findById(id)
// 		.then(profile => {
// 			res.json({
// 				confirmation: 'succes',
// 				data: profile
// 			})
// 		}).catch(err => {
// 			res.json({
// 				confirmation: 'fail',
// 				message: `Profile ${id} not found. ${err.message}`
// 			})
// 		})
// })

export default router;