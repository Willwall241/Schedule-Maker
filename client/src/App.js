import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Nav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './pages/Main';

import axios from 'axios';


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
    },
    searched: {
      username: '',
      useremail: '',
      userschedule: '',
      userevents: ''
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

      const {
        userId,
        isAuthenticated,
        username,
        schedule,
        events
      } = result.data;
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username,
          schedule,
          events
        }
      });
    });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

  };

  handleTimeChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      schedule: {
        [name]: value
      }
    });

  };

  handleSubmit = event => {
    event.preventDefault();


    const newUser = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      Schedule: {
        Monday: {
          MStart: this.state.MStart,
          MLunch: this.state.MLunch,
          MEnd: this.state.MEnd
        },
        Tuesday: {
          TStart: this.state.TStart,
          TLunch: this.state.TLunch,
          TEnd: this.state.TEnd
        },
        Wednesday: {
          WStart: this.state.WStart,
          WLunch: this.state.WLunch,
          WEnd: this.state.WEnd
        },
        Thursday: {
          ThStart: this.state.ThStart,
          ThLunch: this.state.ThLunch,
          ThEnd: this.state.ThEnd
        },
        Friday: {
          FStart: this.state.FStart,
          FLunch: this.state.FLunch,
          FEnd: this.state.FEnd
        }
      }
    };
    this.setState({
      username: '',
      password: ''
    });

    const { name } = event.currentTarget;
    axios.post(name, newUser).then(data => {

      if (data.data.isAuthenticated) {

        const {
          userId,
          isAuthenticated,
          username,
          schedule,
          events
        } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username,
            schedule,
            events
          }
        });
      }
    });
  };

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

  handleLogout = event => {


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

  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Navbar
            handleLogout={this.handleLogout}
            handleSearch={this.handleSearch}
            auth={this.state.auth}
            handleChange={this.handleChange}
            userSearch={this.state.searchUserName}
          />
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
                return <Main auth={this.state.auth} />;
              }
            }}
          />

        </div>
      </Router>
    );
  }
}

export default App;

