import React from 'react';
import './index.css';
// import PropTypes from 'prop-types';
import $ from 'jquery';
import 'fullcalendar';
// import moment from 'moment';
import ClientModal from '../../components/Modal';
import Grid from '@material-ui/core/Grid';

// ... and fullcalendar-reactwrapper.
// import FullCalendar from 'fullcalendar-reactwrapper';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    const events = this.props.auth.events;

    $(function() {
      $('#calendar').fullCalendar({
        height: 'auto',
        navLinks: true, // can click day/week nes to navigate views
        editable: true,
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
      <div>
        <ClientModal />
        <Grid container spacing={24} justify={'center'}>
          <Grid item xs={10}>
            <h3>
              {this.props.auth.username}
              's Calendar
            </h3>

            <div id="calendar" />
          </Grid>
        </Grid>
      </div>
      /* <FullCalendar
            id="calendar"
            header={{
              left: 'prev,next today myCustomButton',
              center: 'title',
              right: 'month,basicWeek,basicDay'
            }}
            // navLinks={true} // can click day/week nes to navigate views
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
