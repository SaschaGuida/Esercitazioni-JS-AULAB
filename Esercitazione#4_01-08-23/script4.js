function contaVocali() {
    const inputElement = document.getElementById("inputString");
    const inputString = inputElement.value.toLowerCase();
    const vocali = "aeiou";
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (vocali.includes(inputString[i])) {
            count++;
        }
    }

    const resultDiv = document.getElementById("resultDiv");
    resultDiv.textContent = `Il numero di vocali nella stringa è: ${count}`;
}



/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/