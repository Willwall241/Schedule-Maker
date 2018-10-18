const User = require('../models').User;
const eventsController = require('../controllers/eventsController');
module.exports = function(passport) {
  const path = require('path');
  const router = require('express').Router();

  router.get('/isAuthenticated', function(req, res) {
    if (req.isAuthenticated()) {
      res.json({
        userId: req.user._id,
        username: req.user.username,
        isAuthenticated: true,
        schedule: req.user.Schedule,
        events: req.user.events
      });
      //you can also pass up any other fields you with to expose
      //for example,
      //nickname: req.user.nickname
    } else {
      res.json({
        userId: null,
        username: null,
        isAuthenticated: false,
        schedule: null
      });
    }
  });

  router.post('/signup', function(req, res) {
    let x = 30; //minutes interval
    let times = []; // time array
    let events = [];
    let tt = 420; // start time
    let ap = ['AM', 'PM']; // AM-PM
    let hours = '7:00';
		let hour = hours.split(':', 1) * 60;
		let end = parseInt(req.body.Schedule.Monday.MEnd.split(':', 1));

    //loop to increment the time and push results in array
    for (let i = 0; tt < end * 60; i++) {
      let eventObj = {
        title: '',
        start: ''
      };
      let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      let mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] = ('0' + hh).slice(-2) + ':' + ('0' + mm).slice(-2);
      // + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
      eventObj.start = times[i];
			eventObj.end = times[i].split(':', 1) + ':' + 30;
			if(eventObj.start == req.body.Schedule.Monday.MLunch) {

				eventObj.title = 'Lunch';
			}

      if (eventObj.start === '23:30') {
				eventObj.end = '24:00'
				events.push(eventObj);
      } else if( eventObj.start === eventObj.end){
        let x = parseInt(eventObj.end.split(':', 1));

        x = x + 1;

        eventObj.end = x + ':' + 30;

        events.push(eventObj);
      } else {
				events.push(eventObj);
			}
    }
    req.body.events = events;
    console.log(req.body.events);
    console.log(req.body);
    const newUser = req.body;
    User.register(newUser, newUser.password, (err, user) => {
      if (err) {
        return res.json(err.message);
      }
      res.json({
        userId: user._id,
        username: user.username,
        isAuthenticated: true,
        schedule: user.schedule,
        events: user.events
      });
    });
  });

  router.post('/newclient', function(req, res) {
    console.log(req.body);
    const newClient = req.body;
  });

  router.post('/signin', passport.authenticate('local'), function(req, res) {
    console.log(req.user);
    res.json({
      userId: req.user._id,
      username: req.user.username,
      isAuthenticated: true,
      schedule: req.user.schedule,
      events: req.user.events
    });
    console.log(req.user.events);
  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.json();
  });

  return router;
};
