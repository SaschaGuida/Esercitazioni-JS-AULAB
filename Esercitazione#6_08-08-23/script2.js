function craftManuscript() {
    const headlineInput = document.getElementById('headline').value;
    const blockInput = document.getElementById('contentBlock').value;

    if (headlineInput.trim() === '' || blockInput.trim() === '') {
        alert('Ensure both the headline and content block are populated.');
        return;
    }

    const archiveDiv = document.getElementById('archive');
    
    const manuscriptDiv = document.createElement('div');
    manuscriptDiv.classList.add('manuscript');

    const h2 = document.createElement('h2');
    h2.textContent = headlineInput;

    const p = document.createElement('p');
    p.textContent = blockInput;

    const publishDate = document.createElement('p');
    publishDate.textContent = `Published on: ${new Date().toLocaleDateString()}`;
    
    const obliterateBtn = document.createElement('button');
    obliterateBtn.textContent = 'Obliterate';
    obliterateBtn.addEventListener('click', function() {
        archiveDiv.removeChild(manuscriptDiv);
    });

    manuscriptDiv.appendChild(h2);
    manuscriptDiv.appendChild(p);
    manuscriptDiv.appendChild(publishDate);
    manuscriptDiv.appendChild(obliterateBtn);

    archiveDiv.appendChild(manuscriptDiv);

    // Clear the input fields
    document.getElementById('headline').value = '';
    document.getElementById('contentBlock').value = '';
}

/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/