import React from 'react';

const buttons = [
  { path: 'profile', pathName: 'Профиль' },
  { path: 'map', pathName: 'Карта'},
  { path: 'login', pathName: 'Логин'},
  { path: 'signup', pathName: 'Регистрация'},
]

export interface NavProps {
  setPath: (path: string) => void;
}
 
export interface NavState {}
 
class Nav extends React.Component<NavProps, NavState> {
  state = {}
  render() { 
    const { setPath } = this.props;
    return ( 
      <>
        <ul>
          {buttons.map(button => {
            return (
              <li key={button.path}>
                <button type='button' onClick={() => setPath(button.path)}>{button.pathName}</button>
              </li>
            )            
          })}
        </ul>
      </>
    );
  }
}
 
export default Nav;