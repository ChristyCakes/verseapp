import Passages from '../db/models/passages';

const PassagesController = {};

PassagesController.get = async (req, res) => {
    try {
        await Passages.find({
            emotion: req
        })
        .select('reference abbr start end')        
        .exec((err, references) => {
            if(err) {
                console.log(err)
            }
            let random = Math.floor(Math.random()*references.length)
            res.json(references[random])
        });
    }
    catch (err) {
        console.log(err)
        res.send(err);
    }
}

export default PassagesController;