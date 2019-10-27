import React from "react";
import "./App.css";
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
        <Header setPath={this.setPath}/>
        {this.setComponent()}
      </>
    );
  }
}
 
export default App;