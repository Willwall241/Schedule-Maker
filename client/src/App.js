import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Nav';
// import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import News from "./pages/news";
import Main from './pages/Main';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ClientModal from './components/Modal';

// const Hours = [
//   {time: '01:00 AM'},
//   {time: '02:00 AM'},
//   {time: '03:00 AM'},
//   {time: '04:00 AM'},
//   {time: '05:00 AM'},
//   {time: '06:00 AM'},
//   {time: '07:00 AM'},
//   {time: '08:00 AM'},
//   {time: '09:00 AM'},
//   {time: '10:00 AM'},
//   {time: '11:00 AM'},
//   {time: '12:00 PM'},
//   {time: '01:00 PM'},
//   {time: '02:00 PM'},
//   {time: '03:00 PM'},
//   {time: '04:00 PM'},
//   {time: '05:00 PM'},
//   {time: '06:00 PM'},
//   {time: '07:00 PM'},
//   {time: '08:00 PM'},
//   {time: '09:00 PM'},
//   {time: '10:00 PM'},
//   {time: '11:00 PM'},
//   {time: '12:00 AM'}
// ]

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    MStart: '',
    MLunch: '',
    MEnd: '',
    TStart: '',
    TLunch: '',
    TEnd: '',
    WStart: '',
    WLunch: '',
    WEnd: '',
    ThStart: '',
    ThLunch: '',
    ThEnd: '',
    FStart: '',
    FLunch: '',
    FEnd: '',
    events: [],
    open: false,
    auth: {
      userId: '',
      username: '',
      isAuthenticated: false,
      MStart: '',
      MLunch: '',
      MEnd: '',
      TStart: '',
      TLunch: '',
      TEnd: '',
      WStart: '',
      WLunch: '',
      WEnd: '',
      ThStart: '',
      ThLunch: '',
      ThEnd: '',
      FStart: '',
      FLunch: '',
      FEnd: '',
      events: []
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillMount() {
    axios.get('/auth/isAuthenticated').then(result => {
      const { userId, isAuthenticated, username, schedule } = result.data;
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username,
          schedule
        }
      });
    });
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    // Set the state for the appropriate input field

    this.setState({
      [name]: value
    });
    console.log(name, value);
  };

  handleTimeChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    // Set the state for the appropriate input field

    this.setState({
      schedule: {
        [name]: value
      }
    });
    console.log(name, value);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('fired');
    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      MStart: this.state.MStart,
      MLunch: this.state.MLunch,
      MEnd: this.state.MEnd,
      TStart: this.state.TStart,
      TLunch: this.state.TLunch,
      TEnd: this.state.TEnd,
      WStart: this.state.WStart,
      WLunch: this.state.WLunch,
      WEnd: this.state.WEnd,
      ThStart: this.state.ThStart,
      ThLunch: this.state.ThLunch,
      ThEnd: this.state.ThEnd,
      FStart: this.state.FStart,
      FLunch: this.state.FLunch,
      FEnd: this.state.FEnd
    };
    this.setState({
      username: '',
      password: ''
    });
    const { name } = event.target;
    axios.post(name, newUser).then(data => {
      console.log('This is data' + data);
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username, schedule } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username,
            schedule
          }
        });
      }
    });
  };

  handleLogout = event => {
    event.preventDefault();
    console.log('Button Fired');
    axios.get('/auth/logout').then(result => {
      this.setState({
        auth: {
          userId: '',
          username: '',
          isAuthenticated: false,
          schedule: {}
        }
      });
    });
    console.log('test');
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Navbar handleLogout={this.handleLogout} auth={this.state.auth} />
          <Route
            exact
            path="/"
            render={() => {
              if (loggedIn) {
                return <Redirect to="/Main" />;
              } else {
                return (
                  <SignIn
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              if (loggedIn) {
                return <Redirect to="/Main" />;
              } else {
                return (
                  <SignUp
                    handleChange={this.handleChange}
                    handleTimeChange={this.handleTimeChange}
                    handleSubmit={this.handleSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    password={this.state.password}
                    MStart={this.state.MStart}
                    MLunch={this.state.MLunch}
                    MEnd={this.state.MEnd}
                    TStart={this.state.TStart}
                    TLunch={this.state.TLunch}
                    TEnd={this.state.TEnd}
                    WStart={this.state.WStart}
                    WLunch={this.state.WLunch}
                    WEnd={this.state.WEnd}
                    ThStart={this.state.ThStart}
                    ThLunch={this.state.ThLunch}
                    ThEnd={this.state.ThEnd}
                    FStart={this.state.FStart}
                    FLunch={this.state.FLunch}
                    FEnd={this.state.FEnd}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/Main"
            render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />;
              } else {
                return (
                  <div>
                  <ClientModal/>
                  <Grid container spacing={24} justify={'center'}>
                    <Grid item xs={8}>
                      <Main auth={this.state.auth} />
                    </Grid>
                  </Grid>
                  </div>
                );
              }
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;

// class App extends Component {
//  render() {
//   // const loggedIn = this.state.auth.isAuthenticated;
//   return (
//     <Router>
//      <div>
//       <Navbar />
//       <Switch>
//        <Route exact path="/" component={SignIn} />
//        <Route exact path="/Main" component={Main} />
//        <Route exact path="/SignUp" component={SignUp} />
//        {/* <Route exact path="/news" component={News} /> */}
//       </Switch>
//      </div>
//     </Router>
//   );
//  };
// };

// export default App;
