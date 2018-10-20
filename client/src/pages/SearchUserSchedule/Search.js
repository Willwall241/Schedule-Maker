import React from 'react';
import './index.css';
import $ from 'jquery';
import 'fullcalendar';
import ClientModal from '../../components/Modal';
import Grid from '@material-ui/core/Grid';


class Search extends React.Component {
  constructor(props) {
    super(props);
    const events2 = props.res.searchUserEvents;
    console.log(this.props.res)

    $(function() {
      $('#calendar2').fullCalendar({
        height: 'auto',
        navLinks: true, // can click day/week nes to navigate views
        editable: true,

        events: events2,
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
              {this.props.res.searchUserName}
              's Calendar
            </h3>

            <div id="calendar2" />
          </Grid>
        </Grid>
      </div>

    );
  }
}


export default Search;
