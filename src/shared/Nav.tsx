import React from 'react';

import Button from '@material-ui/core/Button';

const buttons = [
  { path: 'profile', pathName: 'Профиль' },
  { path: 'map', pathName: 'Карта'},
  { path: 'login', pathName: 'Войти'},
]

export interface NavProps {
  setPath: (path: string) => void;
}
 
const Nav: React.SFC<NavProps> = (props) => {
  const { setPath } = props;

  return ( 
    <>
      <ul>
        {buttons.map(button => {
          return (
            <Button onClick={() => setPath(button.path)}>
              {button.pathName}
            </Button>
          )            
        })}
      </ul>
    </>
  );
}
 
export default Nav;