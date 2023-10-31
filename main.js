function Veiculo(modelo, cor, ano, valor) {
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
    
    let _valor = valor

    this.getValor = function () {
        return _valor
    }

    this.setValor = function (numeracaoValor) {
        if (typeof numeracaoValor === 'string') {
            return _valor = numeracaoValor
        }
    }
}

function Carro(modelo, cor, ano, valor) {
    Veiculo.call(this, modelo, cor, ano, valor)
}

function Moto(modelo, cor, ano, valor) {
    Veiculo.call(this, modelo, cor, ano, valor)
}

function Aviao(modelo, cor, ano, valor) {
    Veiculo.call(this, modelo, cor, ano, valor)
}

const carro1 = new Veiculo('GTR', 'Branco', '2022', 'R$ 2.000.000')
console.log(carro1.getValor());

const moto1 = new Veiculo('Repsol', 'Laranja', '2015', 'R$ 100.000')
console.log(moto1.getValor());

const aviao1 = new Veiculo('Bonaza G36', 'Branco', '2008', 'R$ 3.700.000')
console.log(aviao1.getValor());

console.log(carro1);
console.log(moto1);
console.log(aviao1);