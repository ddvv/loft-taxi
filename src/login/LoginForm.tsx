import React, { useContext } from "react";

import AuthContext from "./../contexts/auth-context";

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

export interface LoginFormProps {}
 
const LoginForm: React.SFC<LoginFormProps> = () => {
  const auth = useContext(AuthContext);
  const theme = useTheme();

  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
  };

  return ( 
    <>
    <form onSubmit={onSubmit}>
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
          <Button>
            Войти
          </Button>
        </div>  
      </ThemeProvider>        
      </form>
    </>
  );
}
 
export default LoginForm;







// export const LoginForm = ({ setPage }) => {
  
//   const onSubmit = e => {
//     e.preventDefault();
//     setPage("profile");
//   };

//   const toPageSignup = e => {
//     e.preventDefault();
//     setPage("signup");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <p>Новый пользователь? <a href="/" onClick={toPageSignup}>Зарегистрируйтесь</a></p>
//       <div>
//         <label>
//           Имя пользователя <br/>          
//           <input name="name" type="text"/>
//         </label>
//       </div>
//       <div>
//         <label>
//           Пароль <br/>
//           <input name="password" type="password"/>
//         </label>
//       </div>
//       <div>
//         <input type="submit" value="Войти"/>
//       </div>
//     </form>
//   );
// };