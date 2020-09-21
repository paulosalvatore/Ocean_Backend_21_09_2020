const numero = 5;

const lista = [1, 2, 3, 4];
console.log(typeof lista);

const nome = "Paulo";
const nome2 = 'Paulo';

const soma = 5 + 9;
const subtracao = 5 - 9;
const multiplicacao = 5 * 9;
const divisao = 5 / 9;
const resto = 5 % 9;

if (soma > 10) {
    console.log('Soma maior que 10.');
} else {
    console.log('Soma é menor.');
}

const teste1 = 10;
const teste2 = '10';

if (teste1 === 10) {
    console.log('Teste1 == 10');
}

if (teste2 === 10) {
    console.log('Teste2 == 10');
}

const objeto = {
    'nome': 'Paulo',
    'celular': {
        'modelo': 'S9',
        'marca': 'Samsung',
        'preco': 1000
    }
};

if (objeto.celular) {
    console.log(objeto.celular.preco);
} else { 
    console.log('Não encontrei o celular');
}

console.log(numero);
