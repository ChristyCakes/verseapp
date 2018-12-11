import Verse from '../db/models/verse';
const VerseController = {};

VerseController.getAll = async (req, res) => {
    try {
        await Verse.find().exec((err, verses) => {
            if (err) {
                res.sendStatus(500).send(err);
            }
            res.json(verses);
        });
    }
    catch (err) {
        res.send(err);
    }
}

VerseController.add = async (req, res) => {
    try {
        await Verse.create( (req) , (err, verse) => {
            if (err) {
                res.sendStatus(500).send(err);
            } 
            res.json(verse)
        })
    }
    catch (err) {
        res.send(err);
    }
}

export default VerseController;