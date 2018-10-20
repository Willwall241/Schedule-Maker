import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './style.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const SignIn = props => {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={0} justify={'center'}>
        <Paper
          className={classes.root}
          elevation={1}
          style={{ width: 'fit-content', marginTop: '10%' }}
        >
          <h1>SIGN IN</h1>

          <form>
            <br />
            <TextField
              value={props.username}
							onChange={props.handleChange}
							label="UserName"
              name="username"
              type="text"
							placeholder="Input Username"
							variant="outlined"

            />
            <br />

            <br />
            <TextField
              name="password"
							type="password"
							label="Password"
              value={props.password}
							onChange={props.handleChange}
							placeholder="Input Password"
							variant="outlined"
            />
            <br />
            <Button
              type="submit"
              name="/auth/signin"
              onClick={props.handleSubmit}
              label="sign in"
            >
              Sign In
            </Button>
						<Button
              type="submit"
							name="/signup"
							href="/signup"
            >
            Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
