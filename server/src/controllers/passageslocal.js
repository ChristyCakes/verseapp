const PassagesController = {};

// the functions below are configured for local database access
import Passages from '../db/models/passages';

PassagesController.get = async (req, res) => {
    try {
        await Passages.find({
            emotion: req
        })
            .select('reference abbr start end')
            .exec((err, references) => {
                if (err) {
                    console.log(err)
                }
                let random = Math.floor(Math.random() * references.length)
                res.json(references[random])
            });
    }
    catch (err) {
        console.log(err)
        res.send(err);
    }
}


// delete request example (not currently used in the app)
PassagesController.del = async (req, res) => {
    try {
        await Passages.findOneAndDelete({
            reference: req
        })
            .exec((err, resp) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.status(200).send(`${req} deleted`)
                }
            });
    }
    catch (err) {
        console.log(err)
        res.send(err);
    }
}

// post request example (not currently used in the app)
PassagesController.post = async (req, res) => {
    try {
        let passage = new Passages({
            emotion: req.body.emotion,
            reference: req.body.reference,
            abbr: req.body.abbr,
            start: req.body.start,
            end: req.body.end
        })
        await passage.save((err, results) => {
            if (err) {
                console.log(err)
            } else {
                console.log("results: ", results)
                res.status(200).send(`${req.body.reference} created`)
            }
        })
    }
    catch (err) {
        console.log(err)
        res.send(err);
    }
}


export default PassagesController;