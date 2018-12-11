import Passages from '../db/models/passages';

const PassagesController = {};

PassagesController.getAll = async (req, res) => {
    try {
        await Passages.find().exec((err, passages) => {
            if (err) {
                res.sendStatus(500).send(err);
            }
            let random = Math.floor(Math.random()*passages.length)
            res.json(passages[random])
        });
    }
    catch (err) {
        res.send(err);
    }
}

// PassagesController.getOne = (id) => {
//     Passages.findById(`ObjectId("${id}")`)
// }

export default PassagesController;