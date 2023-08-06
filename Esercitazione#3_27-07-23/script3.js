function convertiTemperatura() {

    const temperatura = parseFloat(document.getElementById('temperatura').value);

    var descrizione = "";
    if (temperatura < -10) {
        descrizione = "copriti…ancora ti raffreddi";
    } else if (temperatura < 0) {
        descrizione = "non e’ tanto il freddo quanto l’umidità’";
    } else if (temperatura < 20) {
        descrizione = "non ci sono piu’ le mezze stagioni";
    } else if (temperatura >= 30) {
        descrizione = "lu mare, lu sule, lu ientu";
    } else if (temperatura < 30) {
        descrizione = "mi dia una peroni sudata";
    }

    const descrizioneParagrafo = document.getElementById('descrizione');
    descrizioneParagrafo.innerHTML = descrizione;
}