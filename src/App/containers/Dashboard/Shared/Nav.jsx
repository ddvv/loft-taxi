import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Nav = ({ 
  isAuthorized,
  logout,
}) => {
  const buttons = [
    { path: '/profile', pathName: 'Профиль' },
    { path: '/map', pathName: 'Карта'},
  ];
  
  if(!isAuthorized) {
    buttons.push({ path: '/login', pathName: 'Войти'});
  }

  return ( 
    <ul>
      {buttons.map(button => {
        return (
          <Button key={button.path}>
            <Link to={button.path}>
              {button.pathName}
            </Link>
          </Button>
        )            
      })}
      {isAuthorized 
        ? <Button onClick={logout}>Выйти</Button> 
        : <div></div>}
    </ul>
  );
}
 
export default Nav;