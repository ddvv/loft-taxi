import React from 'react';

class LoginForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const password = event.target.password.value;

    console.log(name, password);
    
    window.location.href = "#/map";
  };

  render() {
    return(
      <>
        <p>Новый пользователь? <a href="#/registration">Зарегистрируйтесь</a></p>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Имя пользователя 
            <input name="name" type="text"/>
          </label>
          <br />
          <label>
            Пароль
            <input name="password" type="password"/>
          </label>
          <br />
          <input type="submit" value="Войти"/>
        </form>
      </>
    )
  }
}

export default LoginForm;