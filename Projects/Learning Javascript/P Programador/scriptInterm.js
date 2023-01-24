
// create function
// function teste1 () {
//     console.log('Function 1');
// }
// call function
// teste1();

// function Expression
// const test2 = function(name) {
//     console.log('Function expression', name);
// }

// test2('Jeronimo');

// arrow function

// const test3 = name => {
//     console.log('Arrow function', name);
// }

// test3('JJ');

// arrow function resumida

// const test4 = () => console.log('Arrow function shorten');

// test4();

// Factory Function retorna um objeto e temos acesso aos métodos e propriedades do objeto
// ao executar a function

// const test5 = function(name) {
//     return {
//         login: () => alert(`The user ${name} logged in`),
//         logout: () => console.log(`The user ${name} logged out`),
//     }
// }

// test5('Paula').logout();

// Constructor Function

// const Pessoa = function(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
// }

// const person1 = new Pessoa('Jeronimo', 29, 1.95);
// const person2 = new Pessoa('Raul', 30, 1.79);

// Prototype

// function Game() {
//     this.jumped = () => alert('The character jumped');
//     this.laid = () => alert('The character laid down');
// }

// Game.prototype.ran = () => alert('The character ran');

// const newGame = new Game();

// class, onde criamos métodos e propriedades

// class Mamifero {
//     constructor(patas) {
//         this.especie = 'Mamífero';
//         this.patas = patas;
//     }
//     dormir (){
//         alert ('dormiu');
//     }
// }

// class Pessoa extends Mamifero {
//     // propriedades
//     constructor (patas, name, idade){
//         super(patas);
//         this.name = name;
//         this.idade = idade;
//         this.cidade = 'Recife';
//     }
//     // métodos (functions)

//     dormir() {
//         super.dormir();
//     }
//     andou (){
//         alert('Andou 1km');
//     }
// }

// const person = new Pessoa(2,'Jeronimo', 29);

// Desestruturação

const Pessoa = {
    nome: 'Jeronimo',
    idade: 29,
    endereço: {
        cidade: 'Recife',
        estado: 'PE'
    },
    altura: 1.95
}

const {nome,endereço} = Pessoa;

console.log(endereço);



