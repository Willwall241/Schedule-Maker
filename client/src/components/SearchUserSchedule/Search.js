import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import 'fullcalendar';
import FullCalendar from 'fullcalendar-reactwrapper';

const styles = {
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      open: false,
      searchUn: '',
      searchUe: [],
      searchUid: '',
      test: 'hello',
      userSearch: {
        searchUserName: '',
        searchUserEvents: [],
        searchUserId: ''
      }

    }

  }



  handleSearch = event => {
    const searchUsern = {
      username: this.state.searchUn
    };
    this.setState({
      userSearch: {
        searchUsername: '',
        searchUserEvents: [],
        searchUserId: ''
      }
    });

    axios.post('/auth/searchUser', searchUsern).then(data => {

      if (data) {
        const { searchUserName, searchUserEvents, searchUserId } = data.data;
        this.setState({
          userSearch: {
            searchUserName,
            searchUserEvents,
            searchUserId
          },
          isAuthenticated: true
        });

      }
    });

  };

  handleClickOpen = () => {
    this.setState({ open: true});
    this.handleSearch();

  };

  handleClose = () => {
    this.setState({ open: false, searchUn: ''});

    this.setState({
      open: false
    });
  };

  submitClient = event => {};

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  handleChange2 = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  render() {
    const { classes } = this.props;
    return (
      <div>

        <form>
          <div className={classes.search}>
            <TextField
              placeholder="Search…"
              name="searchUn"
              onChange={this.handleChange2}
              value={this.state.searchUn}

            />
            <Button
              onClick={this.handleClickOpen}

            >
              Search
            </Button>
          </div>
        </form>

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {this.state.searchUn}'s Calendar
              </Typography>
            </Toolbar>
          </AppBar>
          <Divider />
          <Paper
            style={{
              width: '50%',
              margin: 'auto',
              marginTop: 100,
              padding: 15
            }}
          >

            <div id="example-component">
              <FullCalendar
                id="your-custom-ID"
                header={{
                  left: 'prev,next today myCustomButton',
                  center: 'title',
                  right: 'month,basicWeek,basicDay'
                }}
                defaultDate={'2017-09-12'}
                navLinks={true} // can click day/week names to navigate views
                editable={true}
                eventLimit={true} // allow "more" link when too many events
                events={this.state.userSearch.searchUserEvents}
              />
            </div>
          </Paper>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
