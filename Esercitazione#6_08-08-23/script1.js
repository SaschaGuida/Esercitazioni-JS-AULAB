function generateColor() {
    const randomValue = () => Math.floor(Math.random() * 256);
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function modifyColors() {
    const textBlocks = document.querySelectorAll('.text-element');
    for (const block of textBlocks) {
        block.style.color = generateColor();
    }
}

function emphasizeText() {
    const textBlocks = document.querySelectorAll('.text-element');
    for (const block of textBlocks) {
        block.style.fontWeight = block.style.fontWeight === 'bold' ? 'normal' : 'bold';
    }
}

function switchDisplay() {
    const textBlocks = document.querySelectorAll('.text-element');
    for (const block of textBlocks) {
        block.style.display = block.style.display === 'none' ? 'block' : 'none';
    }
}



/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/