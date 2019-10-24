import React from 'react';

class RegistrationForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const password = event.target.password.value;

    console.log(email, firstName, lastName, password);
    
    window.location.href = "#/map";
  };

  render() {
    return(
      <>
        <p>Уже зарегистрированы? <a href="#/login">Войти</a></p>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Адрес электронной почты
            <input name="email" type="email"/>
          </label>
          <br />
          <label>
            Имя
            <input name="firstName" type="text"/>
          </label>
          <br />
          <label>
            Фамилия
            <input name="lastName" type="text"/>
          </label>
          <br />
          <label>
            Пароль
            <input name="password" type="password"/>
          </label>
          <br />
          <input type="submit" value="Зарегистрироваться"/>
        </form>
      </>
    )
  }
}

export default RegistrationForm;