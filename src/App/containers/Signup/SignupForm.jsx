import React from 'react';
import { NavLink } from 'react-router-dom';
import useForm from 'react-hook-form';
import { RHFInput } from "react-hook-form-input";
import { connect } from 'react-redux';
import { actions } from "../../store/duck";
import { 
  isLoginLoadSelector, 
  isLoginErrorSelector, 
} from './../../store/selectors';
import {
  Card,
  CardContent,
  TextField,
  Button,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { theme } from './../Dashboard/Shared/theme';

const mapStateToProps = state => {
  return {
    isLoading: isLoginLoadSelector(state),
    signUpError: isLoginErrorSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: value => dispatch(actions.signUp(value))
  }
};

const SignupForm = ({ 
  isLoading, 
  signUpError,
  signUp,
}) => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data, e) => {
    e.preventDefault();  
    signUp(data);
  };

  if(isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="body1" gutterBottom>Данные загружаются...</Typography>
      </ThemeProvider>
    )
  } else {
    return ( 
      <ThemeProvider theme={theme}>
        <Card>
          <CardContent>
            <div>
              <Typography variant="h5">Регистрация</Typography>
            </div>
            <div>
              <Typography variant="">
                Уже зарегистрированы? <NavLink to="/login">Войти</NavLink>
              </Typography>
            </div>
            <br/>
            {signUpError && <Typography color="error">{signUpError}</Typography>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>
                  Адрес электронной почты <br/>
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
                  Имя <br/>
                  <RHFInput
                    as={<TextField type="text"/>}
                    name="name"
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.name && 'Обязательное поле'}</Typography>
                </label>
              </div>
              <div>
                <label>
                  Фамилия <br/>
                  <RHFInput
                    as={<TextField type="text"/>}
                    name="surname"
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.surname && 'Обязательное поле'}</Typography>
                </label>
              </div>
              <div>
                <label>
                  Пароль <br/>
                  <RHFInput
                    as={<TextField type="text"/>}
                    name="password"
                    register={register({ required: true })}
                  />
                  <Typography color="error">{errors.password && 'Обязательное поле'}</Typography>
                </label>
              </div>
              <div>
                <Button type="submit">Войти</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </ThemeProvider>
    );
  }
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SignupForm);