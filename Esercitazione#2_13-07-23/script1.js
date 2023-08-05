// esercitazione 2 JS

function calcola() {
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;
    var num3 = Math.floor(Math.random() * 100) + 1;
    var num4 = Math.floor(Math.random() * 100) + 1;
    var num5 = Math.floor(Math.random() * 100) + 1;

    var sum = num1 + num2 + num3 + num4 + num5;
    var average = sum / 5;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Numeri generati: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + "<br>";
    outputDiv.innerHTML += "Somma: " + sum + "<br>";
    outputDiv.innerHTML += "Media: " + average;
}

calcola();