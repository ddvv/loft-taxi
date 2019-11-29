import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { actions } from "../../store/duck";
import { connect } from 'react-redux';
import { 
  isLoginLoadSelector, 
  isLoginErrorSelector, 
} from './../../store/selectors';
import useForm from 'react-hook-form';
import { RHFInput } from "react-hook-form-input";
//> material-ui
import { ThemeProvider } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { theme } from './../Dashboard/Shared/theme';
//< material-ui

const mapStateToProps = state => {
  return {
    isLoading: isLoginLoadSelector(state),
    logInError: isLoginErrorSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: value => dispatch(actions.logIn(value))
  }
};

const LoginForm = ({
  isLoading,
  logInError,
  logIn,
}) => {
  const { register, handleSubmit, getValues, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault(); 
    const values = getValues();
    logIn(data);
  };

  if(isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="body1" gutterBottom>Данные загружаются...</Typography>
      </ThemeProvider>
    )
  } else {
    return(
      <ThemeProvider theme={theme}>
        <Card>
          <CardContent>
            <div>
              <Typography variant="h5">Войти</Typography>
            </div>
            <div>
              <Typography variant="">
                Новый пользователь? <NavLink to="/signup">Зарегистрируйтесь</NavLink>
              </Typography>
            </div>
            <br/>
            {logInError && <Typography color="error">{logInError}</Typography>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>
                  Имя пользователя <br/>
                  <RHFInput
                    as={<TextField type="text"/>}
                    name="email"
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.email && 'Обязательное поле'}</Typography>
                </label>
              </div>
              <div>
                <label>
                  Пароль <br/>
                  <RHFInput
                    as={<TextField type="password"/>}
                    name="password"
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.email && 'Обязательное поле'}</Typography>
                </label>
              </div>
              <div>
                <Button type="submit">Войти</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </ThemeProvider>
    )
  }
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginForm);