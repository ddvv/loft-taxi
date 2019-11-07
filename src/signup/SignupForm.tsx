import React from "react";


export interface SignupFormProps {
  setPage: (path:string) => void,
}
 
const SignupForm: React.SFC<SignupFormProps> = ({ setPage }) => {
  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setPage("profile");
  };

  const toPageLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setPage("login");
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Уже зарегистрированы? <a href="/" onClick={toPageLogin}>Войти</a></p>
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
 
export default SignupForm;