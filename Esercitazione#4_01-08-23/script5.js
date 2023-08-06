function calcolaPotenza(stringa) {
    // Dizionario che associa ciascun carattere al suo potere
    const potereCaratteri = {};
    for (let i = 65; i <= 90; i++) {
        const carattere = String.fromCharCode(i); // trasforma in ascii
        const potere = i - 64; // Calcola il potere (A = 1, B = 2, ... Z = 26)
        potereCaratteri[carattere] = potere;
    }

    let potenza = 0;
    for (let i = 0; i < stringa.length; i++) {
        const carattere = stringa[i].toUpperCase();
        potenza += potereCaratteri[carattere];
    }

    return potenza;
}

function confrontaGruppi() {
    const gruppo1 = document.getElementById("gruppo1").value;
    const gruppo2 = document.getElementById("gruppo2").value;

    const potenzaGruppo1 = calcolaPotenza(gruppo1);
    const potenzaGruppo2 = calcolaPotenza(gruppo2);

    let risultato = "";
    if (potenzaGruppo1 > potenzaGruppo2) {
        risultato = "Il gruppo 1 è più forte!";
    } else if (potenzaGruppo1 < potenzaGruppo2) {
        risultato = "Il gruppo 2 è più forte!";
    } else {
        risultato = "Pareggio!";
    }

    document.getElementById("risultato").textContent = risultato;
    document.getElementById("potenzaGruppo1").textContent = "Potenza del gruppo 1: " + potenzaGruppo1;
    document.getElementById("potenzaGruppo2").textContent = "Potenza del gruppo 2: " + potenzaGruppo2;
}

/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/