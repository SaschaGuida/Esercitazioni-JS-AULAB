function isPalindrome(str) {
    const cleanedString2 = str.replace(/\W/g, "").toLowerCase();

    return cleanedString2 === cleanedString2.split("").reverse().join("");
}

function checkPalindrome() {
    const inputString2 = document.getElementById("inputString2").value.trim();
    const result2 = isPalindrome(inputString2);

    const outputDiv2 = document.getElementById("outputDiv2");
    outputDiv2.innerText = result2 ? "La frase/parola è palindroma." : "La frase/parola non è palindroma.";
}

document.getElementById("checkButton2").addEventListener("click", checkPalindrome);