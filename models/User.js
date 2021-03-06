const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const validateEmail = function(email) {

  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return re.test(email)

};

const User = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,

    Required: 'Email address cannot be left blank.',

    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address'
    ],
    index: { unique: true, dropDups: true }
  },
  Date: { type: Date, default: Date.now },
  Schedule: {
    Monday: { MStart: String, MLunch: String, MEnd: String },
    Tuesday: { TStart: String, TLunch: String, TEnd: String },
    Wednesday: { WStart: String, WLunch: String, WEnd: String },
    Thursday: { ThStart: String, ThLunch: String, ThEnd: String },
    Friday: { FStart: String, FLunch: String, FEnd: String }
  },
  MStart: String,
  MLunch: String,
  MEnd: String,
  TStart: String,
  TLunch: String,
  TEnd: String,
  WStart: String,
  WLunch: String,
  WEnd: String,
  ThStart: String,
  ThLunch: String,
  End: String,
  FStart: String,
  FLunch: String,
  FEnd: String,
  events: [],
  //you may replace this 'name' field with anything you like
  client: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Client' }]
  }
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
