const getDB = require('../config/db').getDB;
const UserdataController = {};

UserdataController.post = async (req, res) => {
    try {
        const db = getDB();
        const ref = req.body.reference;
        const tally = req.body.tally;

        // update if document exists, use upsert to create if doesn't yet exist
        await db.collection('userdata').updateOne(
            { reference: ref },
            {
                
                $inc: { [tally]: 1 },
                $set: { reference: ref },
            },

            { upsert: true }
        )
    } catch (e) {
        console.error(`Unable to issue request, ${e}`)
        return []
    }
    res.send("User Data Added")
}

export default UserdataController;