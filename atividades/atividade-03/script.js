//Atividade 03 - Escreva uma função que recebe duas strings, digamos a e b, como argumentos. Se a contém b, anexe b ao início de a, se não, anexe b ao final e retorne a concatenação.

function myFunction(a, b){
    let array = [];

    if(a.indexOf(b) !== -1){
        array.push(b + a);
        return array;
    } else {
        array.push(a + b);
    }
}

console.log(myFunction("types", "s"));