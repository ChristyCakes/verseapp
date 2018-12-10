import mongoose from 'mongoose'

const user = new mongoose.Schema({
    userName: {type:String, required: true, unique: true, trim:true},
    password: {type:String, required: true, trim:true}
})

let userSchema = mongoose.model('User', user);

export default userSchema;