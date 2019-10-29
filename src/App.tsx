import React from "react";

import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { theme } from "./shared/theme";

import Profile from "./profile";
import Login from "./login";
import Map from "./map";
import Signup from "./signup";
import Header from "./shared/Header";

export interface AppProps {}
 
export interface AppState {}
 
class App extends React.Component<AppProps, AppState> {
  state = { 
    path: 'login',
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
        <ThemeProvider theme={theme}>
          <Header setPath={this.setPath}/>
          {this.setComponent()}
        </ThemeProvider>
      </>
    );
  }
}
 
export default App;