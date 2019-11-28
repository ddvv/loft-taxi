import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from "./../../../../store/duck";
import {
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { Logo } from "./../Logo";
import { theme } from './../theme';

const mapDispatchToProps = dispatch => {
  return {
    checkIsLogin: () => dispatch(actions.logOut())
  }
};

const Header = (props) => {

  const logOut = e => {
    e.preventDefault(); 
    const { checkIsLogin } = props;
    checkIsLogin();
  };

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
          <Button onClick={logOut}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>    
  );
}
 
export default connect(
  null, 
  mapDispatchToProps
)(Header);