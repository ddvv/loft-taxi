import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Header extends React.Component{

  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  render() {
    const navItems = [
      {id: 0, title: 'Карта', route: '#/map'},
      {id: 1, title: 'Профиль', route: '#/profile'},
      {id: 2, title: 'Выйти', route: '#/login'}
    ];

    const classes = this.useStyles;

    return (
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Loft Taxi
          </Typography>
          {navItems.map(navItem => (
            <Button  href={navItem.route}>{navItem.title}</Button>
          ))} 
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header; 