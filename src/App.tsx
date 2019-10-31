import React from "react";

import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { theme } from "./shared/theme";

import Profile from "./profile";
import Login from "./login";
import Map from "./map";
import Signup from "./signup";
import Header from "./shared/Header";

import AuthContext from "./contexts/auth-context";

export interface AppProps {}
 
export interface AppState {
  path: string,
  isLoggedIn: boolean,
  login: any,
  logout: any,
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);

    this.state = {
      path: 'profile',
      isLoggedIn: false,
      login: this.setLogIn,
      logout: this.setLogOut, 
    }
  }

  setLogIn = (email:string, password:string) => {
    this.setState({ isLoggedIn: true });
  }

  setLogOut = () => {
    this.setState({ isLoggedIn: false });
  }

  setPath = (path: string) => {
    this.setState({ path });
  }

  setComponent = () => {
    const {path} = this.state;
    switch(path) {
      case 'map':
        return <Map/>;
      case 'profile':
        return <Profile/>;
      case 'signup':
        return <Signup/>;
      default:
        return <Login/>;
    }
  }

  render() { 
    return ( 
      <>
        <AuthContext.Provider value={this.state}>
          <ThemeProvider theme={theme}>
            <Header setPath={this.setPath}/>
            {this.setComponent()}
          </ThemeProvider>
        </AuthContext.Provider>
      </>
    );
  }
}
 
export default App;