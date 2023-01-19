alert('Olha aqui!');

const elogio = 'Bonito';

console.log(`Você é ${elogio}`);

function funcao1(userName) {
    return `${userName} é um Programador!`;
}

console.log(funcao1('Jeronimo'));

const Jeronimo = {
    fullName: 'José Jeronimo Cardoso Moraes Filho',
    idade: 29,
    estado: 'Pernambuco',
    message: function(){ // Função anônima
        alert('Olá!')
    },
    pais: 'Brasil'

}

console.log(Jeronimo.message()); // usando o () executamos a função

const vetor = ['Jeronimo', 'André', 'Lucas'];

const matriz = [
    ['Honda', 'Toyota', 'Subaru'],
    ['Abacaxi', 'Manga', 'Acerola'],
    ['Pedra' , 'Papel', 'Tesoura']
]

console.log(matriz[0] [2]); // acessamos apenas um item da matriz
