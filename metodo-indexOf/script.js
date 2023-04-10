//Exemplo 05
// Encontra um elemento a partir do seu index

const jobs = ["Frontend", "Backend", "DevOps", "FullStack"];
let indexOf = jobs.indexOf("Frontend");

console.log(indexOf); //output: 0


//indexOf(elementoDePesquisa, pontoInicial)
// Ponto inicial, é o índice para iniciar a procura desse elemento dentro do array

const fruits = ["Apple", "Orange", "Banana", "Pear"];
let indexOfSearch = fruits.indexOf("Orange", 2);

console.log(indexOfSearch); //output: -1