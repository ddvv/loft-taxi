import React from "react";

import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { theme } from "./shared/theme";

import Profile from "./profile";
import Login from "./login";
import Map from "./map";
import Signup from "./signup";
import Header from "./shared/Header";

import { AuthProvider } from "./shared/AuthContext";

export interface AppProps {}
 
export interface AppState {
  path: string,
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);

    this.state = {
      path: 'login',
    }
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
        return <Login setPath={this.setPath}/>;
    }
  }

  render() { 
    return ( 
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Header setPath={this.setPath}/>
          {this.setComponent()}
        </ThemeProvider>
      </AuthProvider>
    );
  }
}
 
export default App;