import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setData } from "../../services/useLocalStorage";


import "./style.scss";

export default function Registro() {
  const history = useNavigate();
  const [veiculo, setVeiculo] = useState({
    marca: '',
    modelo: '',
    placa: '',
    ano: '',
    cliente: {},
    mecanico: '',
    status: 'aberto',
  });
  const MIN_PASSWORD_LENGTH = 6;

  const handleCliente = (e) => {
    setVeiculo(prevState => ({
      ...prevState,
      cliente: { 
        ...prevState.cliente,
        [e.target.name]: e.target.value,
      }
    }));
  };

  const { nome, cpf, email, password } = veiculo.cliente;
  const handleSubmit = (e) => {
    e.preventDefault();
    setData('user', ({ nome, cpf, email, role:'cliente', password }));
    setData('veiculos', [veiculo]);
    history("/");
  };

  const validaAno = (ano) => {
    const vAno = /^\d{4}$/g;
    return vAno.test(ano);
  };

  const validaPlaca = (placa) => {
    const vPlaca =/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/;
    return vPlaca.test(placa);
  };

  const validaCPF = (cpf) => {
    const vCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g;
    return vCPF.test(cpf);
  };

  const validaVeiculo = () => {
    if (
      validaAno(veiculo.ano) && validaPlaca(veiculo.placa)
    ) {
      return true;
    }
    return false;
  };

  const validaEmail = (email) => {
    const vEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return vEmail.test(email);
  };
  const validaPassword = () => {
    if (password?.length < MIN_PASSWORD_LENGTH) {
      return false;
    }
    return true;
  };
  const validaLogin = () => {
    if (
      validaEmail(email) &&
      validaPassword() &&
      nome &&
      validaCPF(cpf) &&
      validaVeiculo()) {
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
            name="nome"
            onChange={(event) => handleCliente(event)}
          />
        </label>
        <label htmlFor="cpf">
          <input
            className="registro__container__form__input"
            type="cpf"
            placeholder="Insira seu CPF"
            value={cpf}
            name="cpf"
            onChange={(event) => handleCliente(event)}
          />
        </label>
        <label htmlFor="email">
          <input
            className="registro__container__form__input"
            type="email"
            placeholder="Insira seu email"
            name="email"
            value={email}
            onChange={(event) => handleCliente(event)}
          />
        </label>
        <label>
          <input
            className="registro__container__form__input"
            type="password"
            placeholder="Insira sua senha"
            id="password"
            name="password"
            value={password}
            onChange={(event) => handleCliente(event)}
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
