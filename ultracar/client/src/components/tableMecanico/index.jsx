import React, {useState, useEffect} from "react";
import { getData, setData } from "../../services/useLocalStorage";
import { mecanicos, pecas } from "../../services/mock.js";
import QRCode from "react-qr-code";
import "./style.scss";

export default function TableMecanico() {
    
    const [selectedPeca, setSelectedPeca] = useState("");
    const [totalCompra, setTotalCompra] = useState(0);
    const [loading, setLoading] = useState(true);
    const [veiculos, setVeiculos] = useState([]);
    const [veiculoCadastro, setVeiculoCadastro] = useState({
        marca: "",
        modelo: "",
        placa: "",
        ano: "",
        dataUpdate: "",
        lastUpdate: "",
        valor: '',
        status: "aberto",
        descricao: "",
    });
    
    const handlePeca = (event) => {
        const selectPeca = event.target.value;
        const peca = pecas.find(peca => peca.name === selectPeca);
        setSelectedPeca(peca);
        setTotalCompra(totalCompra + Number(peca.preco));
    };

    const addOrcamento = (placa) => { 
        const copyVeiculos = [...veiculos];   
        const veiculoAtualizado = copyVeiculos.filter((veiculo) => {
            return veiculo.placa === placa;
        });
        veiculoAtualizado[0].status = veiculoCadastro.status;
        veiculoAtualizado[0].descricao = veiculoCadastro.descricao;  
        console.log(veiculoAtualizado);
        setVeiculos(copyVeiculos);
        setData("veiculos", copyVeiculos);
    };
     
     const handleChange = (event) => {
        setVeiculoCadastro((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

        const removeVeiculo = (placa) => {
            const veiculoremovido = veiculos.filter((veiculo) => {
              return veiculo.placa !== placa;
            });
            setVeiculos(veiculoremovido);
            setData("veiculos", veiculoremovido);
        
          };

          const user = getData("user");
    useEffect(() => {
        const veiculosCurrent = getData("veiculos");
        setVeiculos(veiculosCurrent);
        setLoading(false);
    }, []);
    
    return (
        <div>
        <h1>Veiculos</h1>
        <div> Leitor de QRCODE </div>
        {!veiculos ? (
        <p>Sem carros cadastrados</p>
      ) : (
        <div className="table-car__header">
          <h1>Lista de Veículos em espera</h1>
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
               <div>
                <p>Descrição:</p> 
                <p>{veiculo.descricao}</p>
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
              <div>
                <label htmlFor="status">
                    <select
                        
                        name="status"
                        onChange={(event) => handleChange(event)}
                    >
                        <option value="aberto">Aberto</option>
                        <option value="em andamento">Em andamento</option>
                        <option value="concluido">Concluido</option>
                    </select>
                </label>
                <label htmlFor="mecanico">
                    <select
                    name="mecanico"
                    onChange={(event) => handleChange(event)}
                    >
                        {mecanicos.map((mecanico, index) => (
                            <option key={index} value={mecanico.name}>
                                {mecanico.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="pecas">
                    <select
                    name="pecas"
                    onChange={(event) => handlePeca(event)}
                    >
                        {pecas.map((peca, index) => (
                            <option key={index} value={peca.name}>
                                {peca.name}
                            </option>
                        ))}
                    </select>
                    <div>Valor do orçamento: { totalCompra }</div>
                </label>
                <label>
                    <input
                        type="text"
                        
                        placeholder="Descrição"
                        name="descricao"
                        onChange={(event) => handleChange(event)}
                    />
                </label>
                    <button
                    onClick={() => {
                        addOrcamento(veiculo.placa);
                    }}      
                    >Adicionar orçamento</button>
              </div>
              <button onClick={() => removeVeiculo(veiculo.placa)}>Remover</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )} 