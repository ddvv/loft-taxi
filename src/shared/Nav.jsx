import React, { useContext } from 'react';
import { AuthContext } from "../shared/AuthContext";

import Button from '@material-ui/core/Button';


 
const Nav = ({ setPath }) => {
  const { isAuthorized, logout } = useContext(AuthContext);
  const buttons = [
    { path: 'profile', pathName: 'Профиль' },
    { path: 'map', pathName: 'Карта'},
  ];
  
  if(!isAuthorized) {
    buttons.push({ path: 'login', pathName: 'Войти'});
  }

  return ( 
    <ul>
      {buttons.map(button => {
        return (
          <Button onClick={() => setPath(button.path)}>
            {button.pathName}
          </Button>
        )            
      })}
      {isAuthorized 
        ? <Button onClick={() => {logout(); setPath('login')}}>Выйти</Button> 
        : <div></div>}
    </ul>
  );
}
 
export default Nav;