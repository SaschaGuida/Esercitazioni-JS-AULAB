function calcolaFileGatti() {
    const numeroTotaleGatti = parseInt(document.getElementById('numeroGatti').value);
    const gattiInFila = parseInt(document.getElementById('gattiPerFila').value);

    const numeroFile = Math.floor(numeroTotaleGatti / gattiInFila);

    const gattiMancanti = gattiInFila - (numeroTotaleGatti % gattiInFila);

    const gattiFuori = numeroTotaleGatti % gattiInFila;

    const risultatoDiv = document.getElementById('risultato');
    risultatoDiv.textContent = `Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiFuori}`;
}