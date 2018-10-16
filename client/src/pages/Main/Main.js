import React from 'react';
import './index.css';
// import PropTypes from 'prop-types';
import $ from 'jquery';
import 'fullcalendar';
import moment from 'moment';
// import Modal from "../../components/Modal";
// import Grid from '@material-ui/core/Grid';

// ... and fullcalendar-reactwrapper.
// import FullCalendar from 'fullcalendar-reactwrapper';

class MainApp extends React.Component {


  constructor(props) {
    super(props);
      const events= [
        {
          title: 'All Day Event',
          start: '12:00:00',
          dow: [1,4],
          ranges: [{
            start: moment('2018-10-01', 'YYYY-MM-DD'),
            end: moment('2018-10-01', 'YYYY-10-01').endOf('month'),
          }]
        },
        {
          title: 'Long Event',
          start: '2018-10-07',
          end: '2018-10-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-10-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-10-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-10-11',
          end: '2018-10-13'
        },
        {
          title: 'Meeting',
          start: '2018-10-12T10:30:00',
          end: '2018-10-12T12:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-10-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-10-28'
        }
      ]

      
    

    $(function() {
      
      $('#calendar').fullCalendar({
        height: 'auto',
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        // eventLimit: true, // allow "more" link when too many events
        events: events,
        header: {
          left: 'prev,next today myCustomButton',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        }
      });
    
    });

  }

  render() {
    return (

      <div><p>{this.props.auth.username}</p>

      <div id="calendar"></div></div>
          
          /* <FullCalendar
            id="calendar"
            header={{
              left: 'prev,next today myCustomButton',
              center: 'title',
              right: 'month,basicWeek,basicDay'
            }}
            // navLinks={true} // can click day/week names to navigate views
            // editable={true}
            // eventLimit={true} // allow "more" link when too many events
            events={this.state.events}
          /> */
        

    );
  }
}

// MainApp.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default MainApp;
