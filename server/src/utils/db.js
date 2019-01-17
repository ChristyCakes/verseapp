import mongoose from 'mongoose';
import db from '../config/db';

mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        await mongoose.connect(db.mongoUrl, { 
            useMongoClient: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
    }
    catch (err) {
        console.log(err);
    }
}

export default connectToDb;