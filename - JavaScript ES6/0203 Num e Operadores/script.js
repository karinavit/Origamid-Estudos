//toda vez que formos criar um número basta não colocar as aspas nele, pois o uso das aspas caracteriza o uso de strings.
var pi = 3.14 //em programação utilizamos o ponto para separar números decimais.
var exp = 2e10 // esse "e" representa o exponencial
//console.log(exp); 
// Aqui ele mantém uma precisão de até 15 digitos, depois disso ele arredonda.

//OPERADORES ARITIMÉTICOS
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisão = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5; // o restante inteiro do primeiro número

//OPERADORES ARITIMÉTICOS (Strings)
var soma = '100' + 50; // sempre que você soma com uma String, vc está concatenando ela, ainda assim o resultado será uma string
var subtracao = '100' - 50; // consegue trazer o resultado correto
var multiplicacao = '100' * 2; // consegue trazer o resultado correto
var divisão = 'Comprei 10' / 2; // NaN (Not a Number)

// É possível verificar se uma variável é NaN ou não com a função isNaN(), que retorna true ou false

var testeNaN = 
