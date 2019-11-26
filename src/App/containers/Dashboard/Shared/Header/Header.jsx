import React from "react";
import { NavLink } from 'react-router-dom';
import { Logo } from "./../Logo";
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { theme } from './../theme';

const Header = () => {
  return ( 
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Logo/>
          <Button>
            <NavLink to="/dashboard/map">Карта</NavLink>
          </Button>
          <Button>
            <NavLink to="/dashboard/profile">Профиль</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>    
  );
}
 
export default Header;