import React, { Component } from 'react';

class SignupForm extends Component {
  render() { 
    return ( 
      <form>
        {/* <p>Уже зарегистрированы? <a href="/">Войти</a></p> */}
        <div>
          <label>
            Адрес электронной почты <br/>
            <input name="email" type="email"/>
          </label>
        </div>
        <div>
          <label>
            Имя <br/>
            <input name="firstName" type="text"/>
          </label>
        </div>
        <div>
          <label>
            Фамилия <br/>
            <input name="lastName" type="text"/>
          </label>
        </div>
        <div>
          <label>
            Пароль <br/>
            <input name="password" type="password"/>
          </label>
        </div>
        <div>
          <input type="submit" value="Зарегистрироваться"/>
        </div>
      </form>
    );
  }
}
 
export default SignupForm;