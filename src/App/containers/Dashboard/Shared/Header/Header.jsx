import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return ( 
    <>
      <NavLink to="/dashboard/map">Map</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
    </>    
  );
}
 
export default Header;