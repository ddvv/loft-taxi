import React, { useContext } from 'react';
import { AuthContext } from "../shared/AuthContext";
import Button from '@material-ui/core/Button';


export interface NavProps {
  setPath: (path: string) => void,
}
 
const Nav: React.SFC<NavProps> = ({ setPath }) => {
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
          <Button onClick={() => setPath(button.path)} key={button.path}>
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