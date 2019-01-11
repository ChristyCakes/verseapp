import { Router } from 'express';
import UserdataController from '../controllers/userdata';

let router = Router();

router.post('', (req, res) => {
    UserdataController.post(req, res)
})

export default router;