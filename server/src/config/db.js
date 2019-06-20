require('dotenv').config()

// local connection

// const server = '127.0.0.1:27017'
// const database = 'verseapp';
// let mongoose = require('mongoose');
// mongoose.connect(`mongodb://${server}/${database}`, {
// class Database {
// 	constructor() {
// 		this._connect()
// 	}

// 	_connect() {
// 		mongoose.connect(`mongodb://${server}/${database}`, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 		})
// 			.then(() => {
// 				console.log('Database connection successful')
// 			})
// 			.catch(err => {
// 				console.log('Database connection error', err)
// 			})
// 	}
// }



// Atlas cluster connection
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const ATLAS_URI = process.env.ATLAS_URI;
const DATABASE_NAME = 'verseapp';
let database;

class Database {
	constructor() {
		this._connect();
	}

	async _connect() {
		try {
			await MongoClient.connect(`${ATLAS_URI}`, { useNewUrlParser: true }, function (err, client) {
				assert.equal(null, err);
				if (err) { throw err; }
				database = client.db(DATABASE_NAME);
				console.log(`Connection to ${DATABASE_NAME} database successful`);
			})
		} catch (err) {
			console.log('Database connection error', err);
		}
	}
}

module.exports = new Database()
module.exports.getDB = function () { return database };