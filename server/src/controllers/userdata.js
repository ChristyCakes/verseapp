import Userdata from '../db/models/userdata';

const UserdataController = {};

UserdataController.like = async (req, res) => {
    try {
        await Userdata.countDocuments({reference: req.body.reference}, (err, count) => {
            if (err){
                res.status(500).send(err)
            } else {
                console.log(count)   // 0 (expected 1)
                console.log(req.body.reference)     // Psalm 9:1 (as expected)
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}
export default UserdataController;