import React, { useEffect } from "react";
import { logo } from "../../assets";
import { getData } from "../../services/useLocalStorage";
import { useNavigate } from "react-router-dom";
import './index.scss';

export default function Navbar() {
  const userCurrent = getData("user") || [];  
  console.log(userCurrent); 
  const history = useNavigate();
  const handleExit = () => {
    localStorage.clear();
    history("/");
  };

  const handleBegin = () => {
    history("/");
  };

  const handleRegister = () => {
    history("/registro");
  };

  const handleLogin = () => {
    history("/login");
  };

  useEffect(() => {
    const userCurrent = getData("user") || [];  
  }, [userCurrent]);
  
  return (
    <div className="navbar__container">
      <div className="navbar__container__logo">
        <img className="navbar__container__logo_img" src={logo} alt="logo" />
      </div>
      {!userCurrent.role ? (
      <div className="navbar__menu">
        <ul>
        <button className="navbar__container__inicio" onClick={ handleBegin }>Inicio</button>
        <button className="navbar__container__perfil" onClick={ handleRegister }>Registro</button>
        <button className="navbar__container__logout" onClick={ handleLogin }>Login</button>
        </ul>
      </div>
      ): userCurrent.role === 'cliente' ?(
        <div className="navbar__menu">
        <ul>
        <button className="navbar__container__inicio" onClick={ handleBegin }>Inicio</button>
        <button className="navbar__container__perfil">Carros</button>
        <button className="navbar__container__logout"
        onClick={ () => handleExit()}
        >Logout</button>
        </ul>
      </div>
      ): (
        <div className="navbar__menu">
        <ul>
        <button className="navbar__container__inicio" onClick={ handleBegin }>Inicio</button>
        <button className="navbar__container__perfil">Ordens de serviço</button>
        <button className="navbar__container__logout"
        onClick={ () => handleExit()}
        >Logout</button>
        </ul>
      </div>
      )
    }
    </div>
  );
}
