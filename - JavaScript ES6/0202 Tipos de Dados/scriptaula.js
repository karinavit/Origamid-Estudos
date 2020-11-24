//Existem 7 tipos de dados, todos primitivos (imutáveis), exceto os Objetos.

// var nome = 'Andre'; //String
// var idade = 28; //Number
// var possuiFaculdade = true; //Boolean
// var time; //Undefined
// var comida = null; //Null
// var simbolo = Symbol() //Symbol
// var novoObjeto = {} //Object

var nome = 'André';
var idade = 34;
var time = null; // ele retorna um typeof de Object, pois, em versões antigas de JS o null era um objeto, então para não quebrar alguns códigos antigos.
var simbolo = Symbol()
console.log(typeof simbolo);

//a soma de strings chama-se concatenação
var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

// também podemos concatenar strings e números. porém sempre que um número é agregado ele se torna uma string, ver console.log

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log (frase);
console.log(typeof frase);

var ano = '2018';
var mes = 8;
console.log(ano+mes); // neste formato ele vai concatenar as coisas e não irá 'somar' de fato, logo o console.log retorna 20188, pois ele concatena as coisas e transforma um number em uma string,

var ano = 2018;
var mes = 8;
console.log(ano+mes); // quando mantemos em formato número eles serão somados e então passarão a ter o typeof number.


//'JavaScript é "super" fácil'; //pode criar String dessa forma
//"JavaScript é 'super' fácil"; //pode criar String dessa forma
var fraseComBarra = "JavaScript é \"super\" fácil"; // ao usar a "barra" junto com as aspas, estamos apenas atrinundo que elas façam a função delas mesmas.
console.log(fraseComBarra);

//`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido
// essa forma não é válida, tambem não é válido aspas simples dentro de aspas simples.



//TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; //utilizando template string, onde vc deve passar as expressões / variáveis dentro de ${}

console.log(frase2); 


//EXERCÍCIOS:
// Declare uma variável contendo uma string
var fruta = 'banana';
console.log (typeof fruta);

// Declare uma variável contendo um número dentro de uma string
var idade1 = '34';
console.log(typeof idade1);

// Declare uma variável com a sua idade
var idadeAluna = 34;

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nomeAluna = 'Karina';
var sobrenomeAluna = 'Vitangelo';
var nomeAlunaCompleto = `${nomeAluna} ${sobrenomeAluna}`; // errei era para ter usado temṕlate string
console.log(nomeAlunaCompleto);

// Coloque a seguinte frase em uma variável: It's time
var fraseAluna = 'It\'s time'
console.log(fraseAluna);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nomeAluna);












