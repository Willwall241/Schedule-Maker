import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';

const SignUp = props => {
  return (
    <div>
      <h1>SIGN UP</h1>
      <Link to="/">Go to sign in</Link>

      <form>
        <Grid container spacing={0} justify={'center'}>
          <Grid item xs={2}>
            <label>First Name</label>
            <br />
            <Input
              value={props.firstName}
              onChange={props.handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <br />
            <label>Last Name</label>
            <br />
            <Input
              value={props.lastName}
              onChange={props.handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <br />
            <label>Username</label>
            <br />
            <Input
              value={props.username}
              onChange={props.handleChange}
              name="username"
              type="text"
              placeholder="Username"
            />
            <br />
            <label>Email</label>
            <br />
            <Input
              value={props.email}
              onChange={props.handleChange}
              name="email"
              type="email"
              placeholder="example@email.com"
            />
            <br />
            <label>Password</label>
            <br />
            <Input
              name="password"
              type="password"
              value={props.password}
              onChange={props.handleChange}
              placeholder="Password"
            />
            <br />
            <button
              type="submit"
              name="/auth/signup"
              onClick={props.handleSubmit}
            >
              Sign Up
            </button>
          </Grid>
          <Grid item xs={4}>
            <label>Monday</label>
            <br />
            <input
              name="MStart"
              value={props.MStart}
              onChange={props.handleChange}
              label="Start"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="MLunch"
              value={props.MLunch}
              onChange={props.handleChange}
              label="Lunch"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="MEnd"
              value={props.MEnd}
              onChange={props.handleChange}
              label="End"
              type="time"
              max="23:59"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <br />
            <label>Tuesday</label>
            <br />
            <input
              name="TStart"
              value={props.TStart}
              onChange={props.handleChange}
              label="Start"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="TLunch"
              value={props.TLunch}
              onChange={props.handleChange}
              label="Lunch"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="TEnd"
              value={props.TEnd}
              onChange={props.handleChange}
              label="End"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <br />
            <label>Wednesday</label>
            <br />
            <input
              name="WStart"
              value={props.WStart}
              onChange={props.handleChange}
              label="Start"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="WLunch"
              value={props.WLunch}
              onChange={props.handleChange}
              label="Lunch"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="WEnd"
              value={props.WEnd}
              onChange={props.handleChange}
              label="End"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <br />
            <label>Thursday</label>
            <br />
            <input
              name="ThStart"
              value={props.ThStart}
              onChange={props.handleChange}
              label="Start"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="ThLunch"
              value={props.ThLunch}
              onChange={props.handleChange}
              label="Lunch"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="ThEnd"
              value={props.ThursdayEnd}
              onChange={props.handleChange}
              label="End"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <br />
            <label>Friday</label>
            <br />
            <input
              name="FStart"
              value={props.Start}
              onChange={props.handleChange}
              label="Start"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="FLunch"
              value={props.FLunch}
              onChange={props.handleChange}
              label="Lunch"
              type="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <input
              name="FEnd"
              value={props.FEnd}
              onChange={props.handleChange}
              label="End"
              type="time"
              id="time"
              // className={classes.textField}
              // InputLabelProps={{
              //   shrink: true
              // }}
              // inputProps={{
              //   step: 300 // 5 min
              // }}
            />
            <br />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignUp;
