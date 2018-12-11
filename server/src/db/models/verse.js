import mongoose from 'mongoose'

const verse = new mongoose.Schema({
    verse: {type:String, required: true, unique: true, trim:true},
})

let verseSchema = mongoose.model('Verse', verse);

export default verseSchema;