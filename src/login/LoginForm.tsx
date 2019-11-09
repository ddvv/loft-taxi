import React, { useContext } from "react";
import { withAuth } from "./../AuthContext";

import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
 

export interface LoginFormAuthProps {
  login: () => {},
}
 
const LoginFormAuth: React.SFC<LoginFormAuthProps> = ({ login }) => {
  const theme = useTheme(); 
  
  return ( 
    <form>
      <ThemeProvider theme={theme}>
        <div>
          <Typography variant="h5">
            Войти
          </Typography>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="component-name">Имя пользователя</InputLabel>
            <Input id="component-name"/>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="component-password">Пароль</InputLabel>
            <Input id="component-password"/>
          </FormControl>
        </div>
        <div>
          <Button onClick={login}>
            Войти
          </Button>
        </div>  
      </ThemeProvider>        
    </form>
  );
}

const LoginForm = withAuth(LoginFormAuth);
 
export default LoginForm;