import React from "react";
import { logo } from "../../assets";
import './index.scss';

export default function Navbar() {
  const userCurrent = {
    name:'',
    cpf:'',
    role:'cliente',
    };
    
  return (
    <div className="navbar__container">
      <div className="navbar__container__logo">
        <img className="navbar__container__logo_img" src={logo} alt="logo" />
      </div>
      {!userCurrent.role ? (
      <div className="navbar__menu">
        <ul>
        <button className="navbar__container__inicio">Inicio</button>
        <button className="navbar__container__perfil">Registro</button>
        <button className="navbar__container__logout">Login</button>
        </ul>
      </div>
      ): userCurrent.role === 'cliente' ?(
        <div className="navbar__menu">
        <ul>
        <button className="navbar__container__inicio">Inicio</button>
        <button className="navbar__container__perfil">Carros</button>
        <button className="navbar__container__logout">Logout</button>
        </ul>
      </div>
      ): (
        <div className="navbar__menu">
        <ul>
        <button className="navbar__container__inicio">Inicio</button>
        <button className="navbar__container__perfil">Ordens de serviço</button>
        <button className="navbar__container__logout">Logout</button>
        </ul>
      </div>
      )
    }
    </div>
  );
}
