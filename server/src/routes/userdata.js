import { Router } from 'express';
import UserdataController from '../controllers/userdata';

let router = Router();

router.post('/like', (req, res) => {
    // if (req.params.tally = 'like') {
    //     UserdataController.like(req)
    // } else {
    //     UserdataController.dislike(req)
    // }
    UserdataController.like(req, res)
})

export default router;