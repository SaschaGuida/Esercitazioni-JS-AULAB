function verificaAnnoBisestile() {

    const anno = parseInt(document.getElementById('anno').value);

    var esito = "";
    if ((anno % 100 === 0 && anno % 400 === 0) || (anno % 100 !== 0 && anno % 4 === 0)) {
        esito = `${anno} è un anno bisestile.`;
    } else {
        esito = `${anno} non è un anno bisestile.`;
    }

    const esitoParagrafo = document.getElementById('esito');
    esitoParagrafo.textContent = esito;
}