module.exports = {


  eventsArray: function (start, end) {
    var x = 30; //minutes interval
    var times = []; // time array      
    var events = [];
    var tt = 420; // start time
    var ap = ['AM', 'PM']; // AM-PM
    var hours = "7:00";
    var hour = hours.split(":", 1) * 60;
    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
    var eventObj = {
      title: '',
      start: '',
    };
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] = 
        ('' + (hh == 12 ? 12 : hh % 12)).slice(-2) +
        ':' +
        ('0' + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
      eventObj.start = times[i];
      events.push(eventObj);
  }
    
  }

  
}