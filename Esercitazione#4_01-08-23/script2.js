function fizzBuzz(N) {
    let fizzOutput = "Fizz: ";
    let buzzOutput = "Buzz: ";
    let fizzBuzzOutput = "FizzBuzz: ";

    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzOutput += i + ", ";
        } else if (i % 3 === 0) {
            fizzOutput += i + ", ";
        } else if (i % 5 === 0) {
            buzzOutput += i + ", ";
        }
    }

    fizzOutput = fizzOutput.slice(0, -2);
    buzzOutput = buzzOutput.slice(0, -2);
    fizzBuzzOutput = fizzBuzzOutput.slice(0, -2);

    let output = fizzOutput + "<br>" + buzzOutput + "<br>" + fizzBuzzOutput;

    return output;
}

function showFizzBuzz() {
    const N = parseInt(document.getElementById("maxNumber").value);
    const result = fizzBuzz(N);
    document.getElementById("output").innerHTML = result;
}

/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/