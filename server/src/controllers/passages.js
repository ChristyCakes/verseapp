import Passages from '../db/models/passages';

const PassagesController = {};

PassagesController.get = async (req, res) => {
    try {
        await Passages.find({
            emotion: req
        })
        .select('verse')        
        .exec((err, passages) => {
            if(err) {
                console.log(err)
            }
            console.log('all passages: ', passages)
            let random = Math.floor(Math.random()*passages.length)
            res.json(passages[random])
        });
    }
    catch (err) {
        console.log(err)
        res.send(err);
    }
}

export default PassagesController;