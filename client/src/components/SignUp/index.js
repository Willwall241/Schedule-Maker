import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const SignUp = props => {
  return (
    <div>
      <Paper style={{ width: '75%', margin: 'auto', marginTop: 100 }}>
        <Grid container spacing={24} justify={'center'}>
          <h1>SIGN UP</h1>
        </Grid>
        <form>
          <Grid container spacing={0} justify={'center'}>
            <Grid item s={2}>
              <label>First Name</label>
              <br />
              <TextField
                value={props.firstName}
                onChange={props.handleChange}
                style={{ margin: 8 }}
                name="firstName"
                type="text"
                placeholder="John/Jane"
                variant="outlined"
              />
              <br />
              <label>Last Name</label>
              <br />
              <TextField
                value={props.lastName}
                onChange={props.handleChange}
                style={{ margin: 8 }}
                name="lastName"
                type="text"
                placeholder="Doe"
                variant="outlined"
              />
              <br />
              <label>Username</label>
              <br />
              <TextField
                value={props.username}
                onChange={props.handleChange}
                style={{ margin: 8 }}
                name="username"
                type="text"
                placeholder="Doe123"
                variant="outlined"
              />
              <br />
              <label>Email</label>
              <br />
              <TextField
                value={props.email}
                onChange={props.handleChange}
                style={{ margin: 8 }}
                label="Email"
                name="email"
                type="email"
                placeholder="example@email.com"
                variant="outlined"
              />
              <br />
              <label>Password</label>
              <br />
              <TextField
                style={{ margin: 8 }}
                name="password"
                type="password"
                value={props.password}
                onChange={props.handleChange}
                placeholder="Password123"
                variant="outlined"
              />
              <br />
            </Grid>
            <Grid item s={4} style={{ paddingLeft: 15 }}>
              <label>Monday</label>
              <br />
              <TextField
                style={{ margin: 8 }}
                name="MStart"
                value={props.MStart}
                onChange={props.handleChange}
                label="Start"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="MLunch"
                value={props.MLunch}
                onChange={props.handleChange}
                label="Lunch"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="MEnd"
                value={props.MEnd}
                onChange={props.handleChange}
                label="End"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <br />
              <label>Tuesday</label>
              <br />
              <TextField
                style={{ margin: 8 }}
                name="TStart"
                value={props.TStart}
                onChange={props.handleChange}
                label="Start"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="TLunch"
                value={props.TLunch}
                onChange={props.handleChange}
                label="Lunch"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="TEnd"
                value={props.TEnd}
                onChange={props.handleChange}
                label="End"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <br />
              <label>Wednesday</label>
              <br />
              <TextField
                style={{ margin: 8 }}
                name="WStart"
                value={props.WStart}
                onChange={props.handleChange}
                label="Start"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="WLunch"
                value={props.WLunch}
                onChange={props.handleChange}
                label="Lunch"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="WEnd"
                value={props.WEnd}
                onChange={props.handleChange}
                label="End"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <br />
              <label>Thursday</label>
              <br />
              <TextField
                style={{ margin: 8 }}
                name="ThStart"
                value={props.ThStart}
                onChange={props.handleChange}
                label="Start"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="ThLunch"
                value={props.ThLunch}
                onChange={props.handleChange}
                label="Lunch"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="ThEnd"
                value={props.ThursdayEnd}
                onChange={props.handleChange}
                label="End"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <br />
              <label>Friday</label>
              <br />
              <TextField
                style={{ margin: 8 }}
                name="FStart"
                value={props.Start}
                onChange={props.handleChange}
                label="Start"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="FLunch"
                value={props.FLunch}
                onChange={props.handleChange}
                label="Lunch"
                type="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <TextField
                style={{ margin: 8 }}
                name="FEnd"
                value={props.FEnd}
                onChange={props.handleChange}
                label="End"
                type="time"
                id="time"
                InputLabelProps={{
                  shrink: true,
                  step: 300 // 5 min
                }}
                variant="outlined"
              />
              <br />

              <Button
                style={{ margin: 8, zIndex: 1 }}
                type="submit"
                name="/auth/signup"
                onClick={props.handleSubmit}
              >Sign Up</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default SignUp;
