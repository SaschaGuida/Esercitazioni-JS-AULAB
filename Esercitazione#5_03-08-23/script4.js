function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

function findTwoHighest() {
    const inputDiv = document.getElementById("inputArray");
    const outputDiv = document.getElementById("outputResult");

    const inputArray = inputDiv.value.split(',').map(num => Number(num));

    if (inputArray.length < 2) {
        outputDiv.innerText = "L'array deve contenere almeno 2 numeri.";
        return;
    }

    const sortedArray = sortArrayDescending(inputArray);

    const result = [sortedArray[1], sortedArray[0]];

    outputDiv.innerText = '[' + result.join(', ') + ']';
}