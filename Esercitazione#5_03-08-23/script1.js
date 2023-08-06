function sortArray(){
    const inputArray = document.getElementById('inputArray').value.split(',').map(Number);

    if (inputArray.length !== 10) {
        alert('Inserisci 10 numeri separati da una virgola!');
        return;
    }

    const ascendingArray = [...inputArray].sort((a, b) => a - b);
    const descendingArray = [...inputArray].sort((a, b) => b - a);

    document.getElementById('ascendingOutput').innerText = ascendingArray.join(', '); // ciao Jeremy
    document.getElementById('descendingOutput').innerText = descendingArray.join(', ');

}


/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/