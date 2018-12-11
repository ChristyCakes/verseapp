import mongoose from 'mongoose'

const passages = new mongoose.Schema({
    passage: {type:String}
})

let passagesSchema = mongoose.model('Passages', passages);

export default passagesSchema;