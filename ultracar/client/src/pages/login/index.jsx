import React from "react";
import { useNavigate } from "react-router-dom";
import { setData } from "../../services/useLocalStorage";
import { useState } from "react";
import { mecanicos, userCliente } from "../../services/mock";
import './style.scss';

export default function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const MIN_PASSWORD_LENGTH = 6;

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validaLogin()) {
      if (email === mecanicos[0].email && password === mecanicos[0].password) {
        setData("user", mecanicos[0]); 
      } if (email === mecanicos[1].email && password === mecanicos[1].password) {
        setData("user", mecanicos[1]);
      } if (email === userCliente.email && password === userCliente.password) {
        setData("user", userCliente);
      }
      history('/');
  }};

  const validaLogin = () => {
    if (email === mecanicos[0].email && password === mecanicos[0].password) {
      return true;
    } if (email === mecanicos[1].email && password === mecanicos[1].password) {
      return true;
    }
    };

  
  return (
    <div className="login__container">
      <form className="login__container__form">
        <h1 className="login__container__title">Login</h1>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={ (event) => handleEmail(event) }
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Insira sua senha"
            id="password"
            value={password}
            onChange={(event) => handlePassword(event)}
          />
        </label>
        <button
        type="button"
        onClick={ (event) => handleSubmit(event)}
        >Entrar</button>{" "}
      </form>
    </div>
  );
}
