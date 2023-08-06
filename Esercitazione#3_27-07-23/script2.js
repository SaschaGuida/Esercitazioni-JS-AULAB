function converteVoto() {

    const voto = parseInt(document.getElementById('voto').value);

    var giudizio = "";
    if (voto < 18) {
        giudizio = "insufficiente";
    } else if (voto >= 18 && voto < 21) {
        giudizio = "sufficiente";
    } else if (voto >= 21 && voto < 24) {
        giudizio = "buono";
    } else if (voto >= 24 && voto < 27) {
        giudizio = "distinto";
    } else if (voto >= 27 && voto <= 29) {
        giudizio = "ottimo";
    } else if (voto === 30) {
        giudizio = "eccellente";
    } else {
        giudizio = "Valore non valido";
    }

    const giudizioDiv = document.getElementById('giudizio');
    giudizioDiv.textContent = giudizio;
}