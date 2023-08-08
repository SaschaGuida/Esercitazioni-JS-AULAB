function parseArrayInput2() {
    const input = document.getElementById("inputArray2").value;
    return input.split(",").map(el => el.trim());
}

function displayResult2(result2) {
    document.getElementById("result2").textContent = result2;
}

function checkElement() {
    const inputArray2 = parseArrayInput2();
    const elementToCheck = document.getElementById("inputElement2").value;
    const result2 = inputArray2.includes(elementToCheck) ? "Elemento presente nell'array." : "Elemento non presente nell'array.";
    displayResult2(result2);
}

function countElementOccurrences() {
    const inputArray2 = parseArrayInput2();
    const elementToCount = document.getElementById("inputElement2").value;
    const count = inputArray2.reduce((acc, el) => el === elementToCount ? acc + 1 : acc, 0);
    displayResult2(`L'elemento "${elementToCount}" appare ${count} volte nell'array.`);
}

function removeDuplicates() {
    const inputArray2 = parseArrayInput2();
    const uniqueArray = [...new Set(inputArray2)];
    displayResult2(`Array senza duplicati: [${uniqueArray.join(", ")}]`);
}

function copyArray() {
    const inputArray2 = parseArrayInput2();
    const copiedArray = [...inputArray2];
    displayResult2(`Array copiato: [${copiedArray.join(", ")}]`);
}

function removeSpecificElement() {
    const inputArray2 = parseArrayInput2();
    const elementToRemove = document.getElementById("inputElement2").value;
    const filteredArray = inputArray2.filter(el => el !== elementToRemove);
    displayResult2(`Array senza l'elemento "${elementToRemove}": [${filteredArray.join(", ")}]`);
}

function reverseWords() {
    const inputArray2 = parseArrayInput2();
    const reversedWordsArray = inputArray2.map(word => word.split('').reverse().join(''));
    displayResult2(`Array con parole invertite: [${reversedWordsArray.join(", ")}]`);
}

function findLongestWord() {
    const inputArray2 = parseArrayInput2();
    const longestWord = inputArray2.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    displayResult2(`La parola più lunga è "${longestWord}" con una lunghezza di ${longestWord.length}.`);
}

function findMode() {
    const inputArray2 = parseArrayInput2();
    const frequency = inputArray2.reduce((counts, num) => ({ ...counts, [num]: (counts[num] || 0) + 1 }), {});
    const mode = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    displayResult2(`La moda è ${mode}.`);
}









/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/