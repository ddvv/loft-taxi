import React from "react";

export const Header = ({ setPage }) => {
  return (
    <div>
      <button onClick={() => setPage("profile")}>Профиль</button>
      <button onClick={() => setPage("map")}>Карта</button>
      <button onClick={() => setPage("login")}>Логин</button>
      <button onClick={() => setPage("signup")}>Регистрация</button>
    </div>
  );
};