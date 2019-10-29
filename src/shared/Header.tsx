import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Logo } from "./Logo";
import Nav from "./Nav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      marginRight: '100%',
    },
  }),
);

export interface HeaderProps {
  setPath: (path: string) => void
}
 
const Header: React.SFC<HeaderProps> = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const { setPath } = props;

  return ( 
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Logo className={classes.logo}/>
            <Nav setPath={setPath}/>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
 
export default Header;