import React from "react";

export const LoginForm = ({ setPage }) => {
  
  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
  };

  const toPageSignup = e => {
    e.preventDefault();
    setPage("signup");
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Новый пользователь? <a href="/" onClick={toPageSignup}>Зарегистрируйтесь</a></p>
      <div>
        <label>
          Имя пользователя <br/>          
          <input name="name" type="text"/>
        </label>
      </div>
      <div>
        <label>
          Пароль <br/>
          <input name="password" type="password"/>
        </label>
      </div>
      <div>
        <input type="submit" value="Войти"/>
      </div>
    </form>
  );
};