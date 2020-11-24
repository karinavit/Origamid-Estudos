var nome = 'Karina';
var idade = '34';
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade); 

//As variáveis servem para que você evite repetição no código. Esse é um conceito básico de programação. Conceito DRY (Don't repeat yourself). Se vc está repetindo algo no código fique atento pois pode estar errado.

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'Vitangelo' ,
    cidade = 'Barueri';

console.log(sobrenome, cidade)

var semDefinir;
console.log(semDefinir);

//console.log(aindaSemDefinir); vamos deixar essa linha comentada para manter o código sem erro.

//HOISTING: São movidas para cima do código, porém o valor atribuído não é movido.
var comida;
console.log(comida);
comida = 'Pizza';
console.log(comida);

//
/* var time = 'vasco';
console.log(time);
time = 'Flamengo';
console.log(time); */

/* neste caso também podemos usar a palavra let, entretanto não podemos reatribuir let. O exemplo abaixo apresentará um erro no console.
e com o const é uma constante que nunca deve ser mudado. 
let time = 'vasco'; 
let time = 'flamengo';
    console.log(time); */

//  EXERCÍCIOS: (Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.)


// Declarar uma variável com o seu nome
var nomeAluna = 'Karina';
// Declarar uma variável com a sua idade
var idadeAluna = 34;
// Declarar uma variável com a sua comida favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = 'strogonof';

// Declarar 5 variáveis diferentes sem valores
var livro = 'Muito Barulho por Nada',
    sonho,
    filme,
    sobremesaFavorita,
    profissao;

console.log(nomeAluna ,idadeAluna, comidaFavorita, livro); 






