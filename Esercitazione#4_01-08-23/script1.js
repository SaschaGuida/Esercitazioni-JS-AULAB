// Funzione per generare un numero casuale tra 1 e il numero massimo di facce dei dadi (6)
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funzione per lanciare i dadi per il giocatore specificato
function tiraGiocatore(giocatore) {
    var numTiri = parseInt(document.getElementById("numTiri").value);
    var punteggioAttuale = parseInt(document.getElementById("risultatoGiocatore" + giocatore).innerText);

    for (var i = 0; i < numTiri; i++) {
        punteggioAttuale += getRandomNumber();
    }

    document.getElementById("risultatoGiocatore" + giocatore).innerText = punteggioAttuale;
    determinaVincitore();
}

// Funzione per determinare il vincitore e assegnare la scommessa al vincitore
function determinaVincitore() {
    var punteggioGiocatore1 = parseInt(document.getElementById("risultatoGiocatore1").innerText);
    var punteggioGiocatore2 = parseInt(document.getElementById("risultatoGiocatore2").innerText);
    var scommessaGiocatore1 = parseInt(document.getElementById("scommessaGiocatore1").value);
    var scommessaGiocatore2 = parseInt(document.getElementById("scommessaGiocatore2").value);

    var vincitore = punteggioGiocatore1 > punteggioGiocatore2 ? 1 : 2;
    var messaggioVincitore = punteggioGiocatore1 === punteggioGiocatore2 ? "Pareggio!" : "Il vincitore è: Giocatore " + vincitore;

    document.getElementById("vincitore").innerText = messaggioVincitore;

    if (punteggioGiocatore1 !== punteggioGiocatore2) {
        var vincita = vincitore === 1 ? scommessaGiocatore2 : scommessaGiocatore1;
        document.getElementById("vincitore").innerText += ". Vince " + vincita + " Bitcoin.";
    }
}

// Funzione per resettare i punteggi e il risultato del vincitore
function reset() {
    document.getElementById("risultatoGiocatore1").innerText = "0";
    document.getElementById("risultatoGiocatore2").innerText = "0";
    document.getElementById("scommessaGiocatore1").innerText = "0"; //Non Funziona
    document.getElementById("scommessaGiocatore2").innerText = "0"; //Non Funziona
    document.getElementById("vincitore").innerText = "";
}

/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/