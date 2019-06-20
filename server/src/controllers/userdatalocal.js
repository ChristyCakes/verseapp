// the functions below are configured for local database access
import Userdata from '../db/models/userdata';

const UserdataController = {};


// UserdataController.post = async (req, res) => {
//     try {

//         // check for existing reference before posting new
//         await Userdata.countDocuments({ reference: req.body.reference }, (err, count) => {
//             let ref = req.body.reference
//             let tally = req.body.tally
//             if (err) {
//                 res.status(500).send(err)
//             } else {

//                 // if count > 0, reference already exists, therefore increment like/dislike on the reference
//                 if (count > 0) {
//                     Userdata.updateOne({ reference: ref }, { $inc: { [tally]: 1 } }, (err, updated) => {
//                         if (err) {
//                             res.status(500).send(err)
//                         } else {
//                             console.log(updated)
//                             res.send("User Data Added")
//                         }
//                     })

//                     // if count is not > 0, reference doesn't exits, post a new reference with one tally (and include opposite field)
//                 }
//                 else {
//                     if (tally = 'likes') {
//                         Userdata.create({ reference: req.body.reference, likes: 1, dislikes: 0 }, (err, newdata) => {
//                             if (err) {
//                                 res.status(500).send(err)
//                             } else {
//                                 console.log(newdata)
//                                 res.send("User data added")
//                             }
//                         })
//                     } else {
//                         Userdata.create({ reference: req.body.reference, likes: 0, dislikes: 1 }, (err, newdata) => {
//                             if (err) {
//                                 res.status(500).send(err)
//                             } else {
//                                 console.log(newdata)
//                                 res.send("User data added")
//                             }
//                         })
//                     }
//                 }
//             }
//         })
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// export default UserdataController;