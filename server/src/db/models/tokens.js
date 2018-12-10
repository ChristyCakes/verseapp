import mongoose from 'mongoose'

const tokens = new mongoose.Schema({
    id: {type:Number, required: true},
    Userid: {type:Number, required: true}   // from users _id
})

let tokensSchema = mongoose.model('Tokens', tokens);

export default tokensSchema;