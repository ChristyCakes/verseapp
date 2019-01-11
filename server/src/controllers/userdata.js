import Userdata from '../db/models/userdata';

const UserdataController = {};

UserdataController.like = async (req, res) => {
    try {



        // check for existing reference before posting new
        await Userdata.countDocuments({ reference: req.body.reference }, (err, count) => {
            if (err) {
                res.status(500).send(err)
            } else {

                // if count > 0, reference already exists, therefore update likes on the reference
                if (count > 0) {
                    Userdata.updateOne({ reference: req.body.reference }, { $inc: { likes: 1 } }, (err, updated) => {
                        if (err) {
                            res.status(500).send(err)
                        } else {
                            console.log(updated)
                            res.send("Like Added")
                        }
                    })

                    // if count is not > 0, reference doesn't exits, post a new reference with one like (and include dislike field)
                } else {
                    Userdata.create({ reference: req.body.reference, likes: 1, dislikes: 0 }, (err, updated) => {
                        if (err) {
                            res.status(500).send(err)
                        } else {
                            console.log(updated)
                            res.send("Like Added")
                        }
                    })
                }
            }
        })




    }
    catch (err) {
        console.log(err)
    }
}
export default UserdataController;