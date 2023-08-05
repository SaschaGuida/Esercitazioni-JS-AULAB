//secondo esercizio dichiara una variabile chiamata stringa
// e assegnale come valore una stringa qualsiasi

let stringa = "Impariamo JS insieme a Jeremy";

function updateStringa() {
    const inputElement = document.getElementById("stringa-input");
    stringa = inputElement.value;

    const outputElementStringa = document.getElementById("output-stringa");
    outputElementStringa.textContent = stringa;
}

const outputElementStringa = document.getElementById("output-stringa");
outputElementStringa.textContent = stringa;