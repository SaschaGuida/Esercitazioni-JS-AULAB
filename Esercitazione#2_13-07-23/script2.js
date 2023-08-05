function calcola2() {
    var annoNascitaInput = document.getElementById("annoNascita").value;
    var annoNascita = parseInt(annoNascitaInput);

    var annoCorrente = new Date().getFullYear();
    var eta = annoCorrente - annoNascita;
    var anniMancanti = 100 - eta;

    var frase = "Hai " + eta + " anni e ti mancano " + anniMancanti + " anni per compierne 100.";

    var outputDiv = document.getElementById("output-eta");
    outputDiv.textContent = frase;
}  