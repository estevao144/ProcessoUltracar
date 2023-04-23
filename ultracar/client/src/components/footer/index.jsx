import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { facebook, instagram } from "../../assets";

export default function Footer() {
  return (
    <div>
      <nav className="footer">
        <div className="footer__container">
          <p className="footer__title"> Ultracar</p>
          <div className="footer__social">
            <p>Entre nas nossas redes:</p>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
          <p className="footer__copy">
            &copy; 2023 UltraCar. All rights reserved.
          </p>
        </div>
      </nav>
    </div>
  );
}
