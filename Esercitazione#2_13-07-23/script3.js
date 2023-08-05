function calcola3() {
    var numero1Input = document.getElementById("numero1").value;
    var numero1 = parseFloat(numero1Input);

    var numero2Input = document.getElementById("numero2").value;
    var numero2 = parseFloat(numero2Input);

    var numero3Input = document.getElementById("numero3").value;
    var numero3 = parseFloat(numero3Input);

    var somma = numero1 + numero2;
    var sottrazione = numero1 - numero2;
    var moltiplicazione = numero1 * numero2;
    var divisione = numero1 / numero2;
    var potenza = Math.pow(numero1, numero3);
    var radiceq = Math.sqrt(numero1);
    var logaritmo = Math.log(numero1);

    var frase = "Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (" + somma + "), sottrazione (" + sottrazione + "), moltiplicazione (" + moltiplicazione + "), divisione (" + divisione + "), potenza (" + potenza + "), radiceq (" + radiceq + "), logaritmo (" + logaritmo + ").";

    var outputDiv = document.getElementById("output-mathOperation");
    outputDiv.textContent = frase;
}