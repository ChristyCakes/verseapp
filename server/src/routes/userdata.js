import { Router } from 'express';
import UserdataController from '../controllers/userdata';

let router = Router();

router.post('/', async (req, res) => {
    try {
        UserdataController.post(req, res)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }   
})

export default router;