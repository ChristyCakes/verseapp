import mongoose from 'mongoose'

const passages = new mongoose.Schema({
    emotion: {type:String},
    verse: {type:String}
})

let passagesSchema = mongoose.model('Passages', passages);

export default passagesSchema;