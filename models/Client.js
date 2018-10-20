const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Client = new Schema({
	firstName: String,
	lastName: String,
	birthday: Date,
	grade: Number,
	IEP: Date,
	reEval: Date,
	timeRestriction1: String,
	timeRestriction2: String,
	timeRestriction3: String,
	timeRestriction4: String,
	organization: String,
	Specialist: String,
	SpecialistEvents: Array
	//you may replace this 'name' field with anything you like
});

module.exports = mongoose.model('Client', Client);