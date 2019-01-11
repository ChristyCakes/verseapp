import mongoose from 'mongoose'

const Userdata = new mongoose.Schema({
    reference: {type:String},
    likes: {type:Number},
    dislikes: {type:Number},
}, 
{timestamps: true}
)

                                // model name, schema name, collection name
let UserdataSchema = mongoose.model('Userdata', Userdata, 'userdata');

export default UserdataSchema;