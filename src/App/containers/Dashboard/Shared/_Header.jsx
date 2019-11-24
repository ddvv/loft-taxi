import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Logo } from "./Logo";
import Nav from "./Nav";


const Header = () => {
  const theme = useTheme();

  return ( 
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Logo/>
          <Nav/>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
 
export default Header;