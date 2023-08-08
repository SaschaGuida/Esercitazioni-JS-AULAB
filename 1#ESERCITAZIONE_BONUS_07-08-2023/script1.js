function parseArrayInput(inputId) {
    const input = document.getElementById(inputId).value;
    const inputArray = input.split(",").map(Number);
    return inputArray;
}

function displayResult(resultId, message) {
    document.getElementById(resultId).textContent = message;
}

function calculateSum() {
    const inputArray = parseArrayInput("inputArray");
    const sum = inputArray.reduce((acc, num) => acc + num, 0);
    displayResult("result", `La somma degli elementi è: ${sum}`);
}

function findMax() {
    const inputArray = parseArrayInput("inputArray");
    const max = Math.max(...inputArray);
    displayResult("result", `Il valore massimo è: ${max}`);
}

function findMin() {
    const inputArray = parseArrayInput("inputArray");
    const min = Math.min(...inputArray);
    displayResult("result", `Il valore minimo è: ${min}`);
}

function calculateAverage() {
    const inputArray = parseArrayInput("inputArray");
    const sum = inputArray.reduce((acc, num) => acc + num, 0);
    const average = sum / inputArray.length;
    displayResult("result", `La media degli elementi è: ${average.toFixed(2)}`);
}

function countEven() {
    const inputArray = parseArrayInput("inputArray");
    const evenCount = inputArray.filter(num => num % 2 === 0).length;
    displayResult("result", `Il numero di elementi pari è: ${evenCount}`);
}

function countOdd() {
    const inputArray = parseArrayInput("inputArray");
    const oddCount = inputArray.filter(num => num % 2 !== 0).length;
    displayResult("result", `Il numero di elementi dispari è: ${oddCount}`);
}

function reverseArray() {
    const inputArray = parseArrayInput("inputArray");
    const reversedArray = inputArray.slice().reverse();
    displayResult("result", `Array invertito: [${reversedArray.join(", ")}]`);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function sumPrimes() {
    const inputArray = parseArrayInput("inputArray");
    const primeSum = inputArray.filter(isPrime).reduce((acc, num) => acc + num, 0);
    displayResult("result", `La somma dei numeri primi è: ${primeSum}`);
}

function sortAscending() {
    const inputArray = parseArrayInput("inputArray");
    const sortedArray = inputArray.slice().sort((a, b) => a - b);
    displayResult("result", `Array ordinato in ordine crescente: [${sortedArray.join(", ")}]`);
}

function sortDescending() {
    const inputArray = parseArrayInput("inputArray");
    const sortedArray = inputArray.slice().sort((a, b) => b - a);
    displayResult("result", `Array ordinato in ordine decrescente: [${sortedArray.join(", ")}]`);
}

function calculateDifference() {
    const inputArray = parseArrayInput("inputArray");
    const max = Math.max(...inputArray);
    const min = Math.min(...inputArray);
    const difference = max - min;
    displayResult("result", `La differenza tra il valore massimo e minimo è: ${difference}`);
}

function removeZeros() {
    const inputArray = parseArrayInput("inputArray");
    const nonZeroArray = inputArray.filter(num => num !== 0);
    displayResult("result", `Array senza zeri: [${nonZeroArray.join(", ")}]`);
}

/*
 
|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ
 
*/