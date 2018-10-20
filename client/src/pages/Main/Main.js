import React from 'react';
import './index.css';
import $ from 'jquery';
import 'fullcalendar';
import Paper from '@material-ui/core/Paper';
import ClientModal from '../../components/Modal';
import Grid from '@material-ui/core/Grid';



class MainApp extends React.Component {
  constructor(props) {
    super(props);
    const events = this.props.auth.events;
    console.log(this.props.auth.events);

    $(function() {
      $('#calendar').fullCalendar({
        height: 'auto',
        navLinks: true, 
        editable: true,

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
      <div style={{ marginTop: 100, width: '100%', marginBottom: 100 }}>
        <Grid container spacing={24} justify={'center'}>
          <Grid item xs={10}>
            {' '}
            <Paper style={{ padding: 15 }}>
              <ClientModal auth={this.props.auth} load={this.props.load}/>
              <h3>
                {this.props.auth.username}
                's Calendar
              </h3>
              <div id="calendar" />{' '}
            </Paper>
          </Grid>
        </Grid>
      </div>

    );
  }
}


export default MainApp;
