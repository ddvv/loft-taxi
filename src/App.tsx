import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { theme } from "./shared/theme";

import Profile from "./profile";
import Login from "./login";
import Map from "./map";
import Signup from "./signup";
import Header from "./shared/Header";

import { AuthProvider } from './AuthContext';

export interface AppProps {}
 
export interface AppState {
  isAuthorized: boolean,
}
 
class App extends React.Component<AppProps, AppState> {
  loginPath = '/login';
  state = {
    isAuthorized: false,
  }

  login = () => {
	  this.setState({ isAuthorized: true });
  };

  logout = () => {
	  this.setState({ isAuthorized: false });
	};

  render() { 
    const { isAuthorized } = this.state;
    return ( 
      <ThemeProvider theme={theme}>
        <AuthProvider
          value={{
            isAuthorized,
            login: this.login,
            logout: this.logout,
            loginPath: this.loginPath,
          }}
        >
          <Header/>
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login} />
            <Route path="/map" component={Map} />
            <Redirect to="/profile" />
          </Switch>
        </AuthProvider>
      </ThemeProvider>
    );
  }
}

export default App;