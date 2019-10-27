import React from "react";

import Nav from "./Nav";

export interface HeaderProps {
  setPath: (path: string) => void;
}
 
export interface HeaderState {
  
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
  state = {}
  render() { 
    return ( 
      <>
      <p>Loft Taxi</p>
      <Nav setPath={this.props.setPath}/>
    </>
     );
  }
}
 
export default Header;