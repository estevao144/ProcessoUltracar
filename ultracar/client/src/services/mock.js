const mecanicos = [
{
    name: 'Guilherme Davi',
    email: 'gui.davi@ultracar.com',
    idFuncionario: '1',
    role: 'mecanico',
    password: '123456',
},
{
    name: 'Mauricio Marques',
    email: 'mauricio.marq@ultracar.com',
    idFuncionario: '2',
    role: 'mecanico',
    password: '123456',
}
];

const userCliente = {
name: 'Estevão Marques',
email: 'estevao.marq@ultracar.com',
cpf: '122.233.333-44',
role: 'cliente',
password: '123456',
};

const veiculo = {
marca: 'Fiat',
modelo: 'Uno',
placa: 'ABC-1234',
ano: '2010',
cliente: 'Estevão Marques',
mecanico: 'Guilherme Davi',
status: 'Em andamento',
};

export { veiculo, userCliente, mecanicos };