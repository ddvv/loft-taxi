import React from 'react';

class Header extends React.Component{
  render() {
    const navItems = [
      {id: 0, title: 'Карта', route: '#/map'},
      {id: 1, title: 'Профиль', route: '#/profile'},
      {id: 2, title: 'Выйти', route: '#/login'}
    ];

    return (
      <header>
        <p>Loft Taxi</p>
        <ul>
          {navItems.map(navItem => (
            <li key={navItem.id}>
              <a href={navItem.route} >{navItem.title}</a>                            
            </li>
          ))}
        </ul>
      </header>
    )
  }
}

export default Header; 