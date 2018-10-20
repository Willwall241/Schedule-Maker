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
import Grid from '@material-ui/core/Grid';

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
  state = {
    open: false,
    fName: '',
    lName: '',
    bDay: '',
    iepDate: '',
    revalDate: '',
    grade: '',
    restriction1: '',
    restriction2: '',
    restriction3: '',
    restriction4: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });


    this.setState({
      open: false,
      fName: '',
      lName: '',
      bDay: '',
      iepDate: '',
      revalDate: '',
      grade: '',
      restriction1: '',
      restriction2: '',
      restriction3: '',
      restriction4: ''
    });
    window.location.reload();
  };

  submitClient = event => {
    event.preventDefault();


    const newClient = {
      firstName: this.state.fName,
      lastName: this.state.lName,
      birthday: this.state.bDay,
      grade: this.state.grade,
      IEP: this.state.iepDate,
      reEval: this.state.reEval,
      timeRestriction1: this.state.timeRestriction1,
      timeRestriction2: this.state.timeRestriction2,
      timeRestriction3: this.state.timeRestriction3,
      timeRestriction4: this.state.timeRestriction4,
      Specialist: this.props.auth.userId,
      SpecialistEvents: this.props.auth.events
    };
    this.setState({
      username: '',
      password: ''
    });
   
    const { name } = event.currentTarget;

    axios.post(name, newClient).then(data => {

    });
    setTimeout(this.handleClose, 1000);
  };

  handleChange = event => {
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
        <Button onClick={this.handleClickOpen}>Add Client</Button>
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
                Input New Client
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
            <form>
              <Grid container spacing={0} justify={'center'}>
                <Grid item s={2}>
                  <h1>Client Information Form</h1>
                  <TextField
                    id="first-name"
                    style={{ margin: 8 }}
                    label="First Name"
                    className={classes.textField}
                    value={this.state.fName}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="fName"
                  />
                  <TextField
                    id="last-name"
                    style={{ margin: 8 }}
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lName}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    name="lName"
                  />
                  <br />
                  <TextField
                    id="birthday"
                    style={{ margin: 8 }}
                    label="Birthday"
                    className={classes.textField}
                    value={this.state.bDay}
                    onChange={this.handleChange}
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    margin="normal"
                    variant="outlined"
                    name="bDay"
                  />
                  <TextField
                    id="grade"
                    style={{ margin: 8 }}
                    label="Grade"
                    className={classes.textField}
                    value={this.state.grade}
                    onChange={this.handleChange}
                    type="number"
                    rowsMax="6"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    variant="outlined"
                    name="grade"
                  />
                  <br />
                  <TextField
                    id="IEP"
                    style={{ margin: 8 }}
                    label="IEP Date"
                    className={classes.textField}
                    value={this.state.iepDate}
                    onChange={this.handleChange}
                    margin="normal"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    variant="outlined"
                    name="iepDate"
                  />
                  <TextField
                    id="ReEval Date"
                    style={{ margin: 8 }}
                    label="Re-Eval Date"
                    className={classes.textField}
                    value={this.state.revalDate}
                    onChange={this.handleChange}
                    margin="normal"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    variant="outlined"
                    name="revalDate"
                  />
                  <br />
                  <TextField
                    id="restriction1"
                    style={{ margin: 8 }}
                    label="Time Restriction 1"
                    className={classes.textField}
                    value={this.state.restriction1}
                    onChange={this.handleChange}
                    margin="normal"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    variant="outlined"
                    name="restriction1"
                  />
                  <TextField
                    id="restrictions2"
                    style={{ margin: 8 }}
                    label="Time Restriction 2"
                    className={classes.textField}
                    value={this.state.restriction2}
                    onChange={this.handleChange}
                    margin="normal"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    variant="outlined"
                    name="restriction2"
                  />
                  <br />
                  <TextField
                    id="restriction3"
                    style={{ margin: 8 }}
                    label="Time Restriction 3"
                    className={classes.textField}
                    value={this.state.restriction3}
                    onChange={this.handleChange}
                    margin="normal"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    variant="outlined"
                    name="restriction3"
                  />
                  <TextField
                    id="restriction4"
                    style={{ margin: 8 }}
                    label="Time Restriction 4"
                    className={classes.textField}
                    value={this.state.restriction4}
                    onChange={this.handleChange}
                    margin="normal"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                      step: 300 // 5 min
                    }}
                    variant="outlined"
                    name="restriction4"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={0} justify={'center'}>
                <Grid item s={2}>
                  <Button
                    type="submit"
                    color="inherit"
                    name="/auth/newClient"
                    onClick={this.submitClient}
                  >
                    save
                  </Button>
                </Grid>
              </Grid>
            </form>
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
