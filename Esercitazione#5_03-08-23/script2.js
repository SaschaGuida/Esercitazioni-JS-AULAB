function calcolaMediaValori() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbersArray = inputNumbers.split(',').map(Number);

    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    const media = sum / numbersArray.length;

    const valoriMinori = numbersArray.filter(num => num < media);

    document.getElementById('mediaOutput').innerText = media.toFixed(1);
    document.getElementById('valoriMinoriOutput').innerText = '[' + valoriMinori.join(', ') + ']';
}

/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/