const getDB = require('../config/db').getDB;
const PassagesController = {};

let cursor, random;

PassagesController.get = async (req, res) => {
    try {
        const db = getDB();
        cursor = await db.collection('passages').find(
            { "emotion": { $in: [req] } },
            {
                projection: {
                    reference: 1,
                    abbr: 1,
                    start: 1,
                    end: 1
                }
            }
        ).toArray();        
        random = Math.floor(Math.random() * cursor.length)
    } catch (e) {
        console.error(`Unable to issue request, ${e}`)
        return []
    }
    console.log("passages controller: ", cursor[random])
    res.json(cursor[random])
}

export default PassagesController;