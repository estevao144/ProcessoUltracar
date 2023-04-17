import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userMecanico, userCliente } from "../../services/mock";
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
      history('/');
    } else {
      alert("Email ou senha inválidos");
    }
  };

  const validaLogin = () => {
    if (email === userMecanico.email && password === userMecanico.password) {
      return true;
    } if (email === userCliente.email && password === userCliente.password) {
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
