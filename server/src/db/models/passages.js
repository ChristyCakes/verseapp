import mongoose from 'mongoose'

const passages = new mongoose.Schema({
    emotion: {type:String},
    reference: {type:String},
    abbr: {type:String},
    start: {type:String},
    end: {type:String}
})

let passagesSchema = mongoose.model('Passages', passages);

export default passagesSchema;