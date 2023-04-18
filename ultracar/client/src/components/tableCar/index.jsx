import React, { useContext, useEffect, useState } from "react";
import { getData, setData } from "../../services/useLocalStorage";
import QRCode from "react-qr-code";
import "./style.scss";

export default function TableCar() {
  const [loading, setLoading] = useState(true);
  const [veiculos, setVeiculos] = useState([]);
  const [veiculoCadastro, setVeiculoCadastro] = useState({
    marca: "",
    modelo: "",
    placa: "",
    ano: "",
    status: "aberto",
    descricao: "",
  });

  const addVeiculo = (e) => {
    e.preventDefault();
    const newVeiculoArray = [...veiculos, veiculoCadastro];
    setVeiculos(newVeiculoArray);
    setData("veiculos", newVeiculoArray);
    setVeiculoCadastro({
      marca: "",
      modelo: "",
      placa: "",
      ano: "",
      status: "aberto",
      descricao: "",
    });
    
  };

  const removeVeiculo = (placa) => {
    const veiculoremovido = veiculos.filter((veiculo) => {
      return veiculo.placa !== placa;
    });
    setVeiculos(veiculoremovido);
    setData("veiculos", veiculoremovido);

  };

  useEffect(() => {
    const veiculosCurrent = getData("veiculos");
    setVeiculos(veiculosCurrent);
    setLoading(false);
  }, []);
  const user = getData("user");

  console.log(user);

  return (
    <div className="table-car">
      <div> Adicionar carro:</div><form onSubmit={addVeiculo}>
            <label htmlFor="marca">
              <input
                type="text"
                value={veiculoCadastro.marca}
                onChange={(event) => setVeiculoCadastro({
                  ...veiculoCadastro,
                  marca: event.target.value,
                })}
                placeholder="Marca" />
            </label>
            <label htmlFor="modelo">
              <input
                type="text"
                value={veiculoCadastro.modelo}
                placeholder="Modelo"
                onChange={(event) => setVeiculoCadastro({
                  ...veiculoCadastro,
                  modelo: event.target.value,
                })} />
            </label>
            <label htmlFor="ano">
              <input
                type="text"
                value={veiculoCadastro.ano}
                placeholder="Ano"
                onChange={(event) => setVeiculoCadastro({
                  ...veiculoCadastro,
                  ano: event.target.value,
                })} />
            </label>
            <label htmlFor="placa">
              <input
                type="text"
                value={veiculoCadastro.placa}
                placeholder="Placa"
                onChange={(event) => {
                  setVeiculoCadastro({
                    ...veiculoCadastro,
                    placa: event.target.value,
                  });
                } } />
            </label>
            <button type="submit">Adicionar</button>
          </form>
      {loading ? (
        <p>Sem carros cadastrados</p>
      ) : (
        <div className="table-car__header">
          <h1>Veículos</h1>
          {veiculos.map((veiculo, index) => (
            <div className="table-car__header__content" key={index}>
              <div className="table-car__header__content__item">
                <p>Marca</p>
                <p>{veiculo.marca}</p>
              </div>
              <div className="table-car__header__content__item">
                <p>Modelo</p>
                <p>{veiculo.modelo}</p>
              </div>
              <div className="table-car__header__content__item">
                <p>Ano</p>
                <p>{veiculo.ano}</p>
              </div>
              <div className="table-car__header__content__item">
                <p>Placa</p>
                <p>{veiculo.placa}</p>
              </div>
              <div className="table-car__header__content__item">
                <p>status:</p>
                <p>{veiculo.status}</p>
              </div>
              <div className="table-car__header__content__qrcode">
                <p>QR Code</p>
                <QRCode
                      size={400}
                      style={{
                        height: "150px",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={ `${veiculos.marca},${veiculos.modelo},${veiculos.ano},${veiculos.placa},${veiculos.status}, ${veiculos.descricao}, ${veiculos.mecanico},${user.name}`}
                      viewBox={`0 0 256 256`}
                    />
              </div>
              <button onClick={() => removeVeiculo(veiculo.placa)}>Remover</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
