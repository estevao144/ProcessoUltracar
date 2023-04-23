import React from "react";
import { logoTall } from "../../assets";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__container__img">
        <img src={logoTall} alt="logoTall" />
      </div>
      <div className="home__container__text">
        <h2 className="home__container__text__title"> sobre a UltraCar</h2>
        <p className="home__container__text__paragrafo">
          {" "}
          Acessado pela nuvem, simplifica e facilita a realização da gestão em
          sua oficina, com uma interface limpa e intuitiva aumenta a
          produtividade do seu negócio.
        </p>
        <h2>Economia</h2>
        <p className="home__container__text__paragrafo">
          Sem custo de implantação, realizamos planos com preços que cabem no
          seu bolso. Acessibilidade garantida com nosso software compatível em
          todos os dispositivos móveis, assim realizando gestão com um ótimo
          custo benefício.
        </p>
        <h2> Liberdade </h2>
        <p className="home__container__text__paragrafo">
          Tenha a liberdade de trabalhar onde estiver, verificar os resultados
          de sua oficina através do seu celular, tablet entre outros. Tenha
          todos os relatórios em suas mãos com apenas um toque, seja livre e não
          perca tempo para alcançar o secesso.
        </p>
        <h2> Segurança </h2>
        <p className="home__container__text__paragrafo">
          A UltraCar garante a segurança de seus dados, com criptografia de
          ponta a ponta, garantindo a segurança de seus dados, além de ser um
          software de código aberto, com isso, você pode ter a certeza de que
          não há nenhuma espionagem ou invasão de privacidade.
        </p>
        <Link to="https://ultracarweb.com/">
        <button> Venha conhecer </button>
        </Link>
      </div>
    </div>
  );
}
