import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setData } from "../../services/useLocalStorage";
import { mecanicos } from "../../services/mock";

import "./style.scss";

export default function Registro() {
  const history = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [veiculo, setVeiculo] = useState({
    marca: "",
    modelo: "",
    placa: "",
    ano: "",
    cliente: "",
    mecanico: "",
  });
  const MIN_PASSWORD_LENGTH = 6;

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  const handleCpf = (e) => {
    setCpf(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData('user', ({ nome, cpf, email, role:'cliente', password, veiculo }));
    history("/");
  };

  const validaEmail = (email) => {
    const vEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return vEmail.test(email);
  };
  const validaPassword = () => {
    if (password.length < MIN_PASSWORD_LENGTH) {
      return false;
    }
    return true;
  };
  const validaLogin = () => {
    if (
      validaEmail(email) &&
      validaPassword() &&
      nome &&
      cpf &&
      veiculo.marca &&
      veiculo.modelo &&
      veiculo.placa &&
      veiculo.ano
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="registro__container">
      <form className="registro__container__form">
        <h1 className="registro__container__title">Registre-se aqui</h1>
        <label htmlFor="nome">
          <input
            className="registro__container__form__input"

            type="nome"
            placeholder="Insira seu nome"
            value={nome}
            onChange={(event) => handleNome(event)}
          />
        </label>
        <label htmlFor="cpf">
          <input
            className="registro__container__form__input"
            type="cpf"
            placeholder="Insira seu CPF"
            value={cpf}
            onChange={(event) => handleCpf(event)}
          />
        </label>
        <label htmlFor="email">
          <input
            className="registro__container__form__input"
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={(event) => handleEmail(event)}
          />
        </label>
        <label>
          <input
            className="registro__container__form__input"
            type="password"
            placeholder="Insira sua senha"
            id="password"
            value={password}
            onChange={(event) => handlePassword(event)}
          />
        </label>
        <h1>Veiculo:</h1>
        <label htmlFor="marca">
          <input
            className="registro__container__form__input"
            type="marca"
            placeholder="Insira a marca do veiculo"
            value={veiculo.marca}
            onChange={(event) =>
              setVeiculo({ ...veiculo, marca: event.target.value })
            }
          />
        </label>
        <label htmlFor="modelo">
          <input
            className="registro__container__form__input"
            type="modelo"
            placeholder="Insira a modelo do veiculo"
            value={veiculo.modelo}
            onChange={(event) =>
              setVeiculo({ ...veiculo, modelo: event.target.value })
            }
          />
        </label>
        <label htmlFor="placa">
          <input
            className="registro__container__form__input"
            type="placa"
            placeholder="Insira a placa do veiculo"
            value={veiculo.placa}
            onChange={(event) =>
              setVeiculo({ ...veiculo, placa: event.target.value })
            }
          />
        </label>
        <label htmlFor="ano">
          <input
            className="registro__container__form__input"
            type="ano"
            placeholder="Insira o ano do veiculo"
            value={veiculo.ano}
            onChange={(event) =>
              setVeiculo({ ...veiculo, ano: event.target.value })
            }
          />
        </label>
        <button
          type="button"
          disabled={!validaLogin()}
          onClick={(event) => handleSubmit(event)}
        >
          Registrar
        </button>{" "}
      </form>
    </div>
  );
}
