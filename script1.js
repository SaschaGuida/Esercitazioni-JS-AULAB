// primo esercizio 
let variabile1;
let variabile2;
const numero1 = document.getElementById('var1');
const numero2 = document.getElementById('var2');
const variabile1Output = document.getElementById('variabile1-output');
const variabile2Output = document.getElementById('variabile2-output');
const sommaOutput = document.getElementById('somma-output');

function updateVariables() {
    variabile1 = Number(numero1.value);
    variabile2 = Number(numero2.value);

    variabile1Output.textContent = variabile1;
    variabile2Output.textContent = variabile2;
    sommaOutput.textContent = variabile1 + variabile2;
}

numero1.addEventListener('input', updateVariables);
numero2.addEventListener('input', updateVariables);

