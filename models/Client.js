const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Client = new Schema({
	name: String,
	restrictions: String,
	organization: String
	//you may replace this 'name' field with anything you like
});

module.exports = mongoose.model('Client', Client);