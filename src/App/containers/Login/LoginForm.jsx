import React, { Component } from "react";

//> material-ui
import { ThemeProvider } from '@material-ui/core/styles';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//< material-ui

import { actions } from "../../store/duck";
import { connect } from 'react-redux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    logIn: value => dispatch(actions.logIn(value))
  }
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { logIn } = this.props;

    if(email && password) {
      logIn(this.state);
    }
  };

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <ThemeProvider theme={this.theme}>
          <div>
            <Typography variant="h5">
              Войти
            </Typography>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="component-name">Имя пользователя</InputLabel>
              <Input type="email" name="email" id="component-name" onChange={this.handleChange}/>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="component-password">Пароль</InputLabel>
              <Input type="password" name="password" id="component-password"  onChange={this.handleChange}/>
            </FormControl>
          </div>
          <div>
            <Button type="submit">
              Войти
            </Button>
          </div>  
        </ThemeProvider>        
      </form>
    );
  }
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginForm);