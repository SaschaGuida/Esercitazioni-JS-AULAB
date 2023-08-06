function countDigits(number) {
    // Converto il numero in stringa per contare le cifre
    const numberString = number.toString();
    // Restituisco il numero di cifre
    return numberString.length;
}

function checkInputAndCountDigits() {
    const userInput = document.getElementById("user-input").value;
    const number = parseInt(userInput);

    if (isNaN(number)) {
        document.getElementById("result").innerText = "Input non valido. Inserisci un numero.";
        return;
    }

    if (number > 9999) {
        document.getElementById("result").innerText = "Numero troppo grande. Inserisci un numero massimo di 9999.";
        return;
    }

    if (number < 0) {
        document.getElementById("result").innerText = "Numero negativo. Inserisci un numero massimo di 9999.";
        return;
    }

    const digitCount = countDigits(number);
    document.getElementById("result").innerText = digitCount;
}

/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/