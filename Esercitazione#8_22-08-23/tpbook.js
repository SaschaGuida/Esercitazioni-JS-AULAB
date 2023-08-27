let contatti = [];
let contattiOriginali = [];
let indiceDaModificare = null;

function validaInput() {
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const numeroTelef = document.getElementById("numero").value;
    const email = document.getElementById("email").value;
    const indirizzo = document.getElementById("indirizzo").value;
    const soprannome = document.getElementById("soprannome").value;

    if (!nome || !cognome || !numeroTelef || !email || !indirizzo || !soprannome) {
        alert("Tutti i campi sono obbligatori!");
        return false;
    }

    if (!/^\d+$/.test(numeroTelef)) {
        alert("Inserisci un numero di telefono valido!");
        return false;
    }

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert("Inserisci un'email valida!");
        return false;
    }

    return true;
}

function aggiungiOModificaContatto() {
    if (!validaInput()) return;

    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const numeroTelef = document.getElementById("numero").value;
    const email = document.getElementById("email").value;
    const indirizzo = document.getElementById("indirizzo").value;
    const soprannome = document.getElementById("soprannome").value;

    const contatto = {
        nome,
        cognome,
        numeroTelef,
        email,
        indirizzo,
        soprannome
    };

    if (indiceDaModificare !== null) {
        contatti[indiceDaModificare] = contatto;
        indiceDaModificare = null;
    } else {
        contatti.push(contatto);
        contattiOriginali = [...contatti];
    }

    aggiornaLista();
    pulisciCampi();
}

function pulisciCampi() {
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("soprannome").value = "";
}

function aggiornaLista() {
    let html = '';
    contatti.forEach((contatto, indice) => {
        html += `
            <div>
                <strong>${contatto.nome} ${contatto.cognome}</strong> (Soprannome: ${contatto.soprannome})
                <div>Numero: ${contatto.numeroTelef}</div>
                <div>Email: ${contatto.email}</div>
                <div>Indirizzo: ${contatto.indirizzo}</div>
                <button onclick="eliminaContatto(${indice})">Elimina</button>
                <button onclick="preparaModificaContatto(${indice})">Modifica</button>
            </div>
        `;
    });
    document.querySelector('.lista-contatti').innerHTML = html;
}

function eliminaContatto(indice) {
    contatti.splice(indice, 1);
    contattiOriginali = [...contatti];
    aggiornaLista();
}

function preparaModificaContatto(indice) {
    const contatto = contatti[indice];
    document.getElementById("nome").value = contatto.nome;
    document.getElementById("cognome").value = contatto.cognome;
    document.getElementById("numero").value = contatto.numeroTelef;
    document.getElementById("email").value = contatto.email;
    document.getElementById("indirizzo").value = contatto.indirizzo;
    document.getElementById("soprannome").value = contatto.soprannome;
    indiceDaModificare = indice;
}

function mostraRicerca() {
    document.querySelector('.ricerca-contatto').style.display = 'block';
}

function nascondiRicerca() {
    document.querySelector('.ricerca-contatto').style.display = 'none';
}

function effettuaRicerca() {
    const campo = document.querySelector('input[name="campo-ricerca"]:checked').value;
    const valore = document.getElementById('valore-ricerca').value.toLowerCase();

    const risultati = contatti.filter(contatto => contatto[campo].toLowerCase().includes(valore));
    contatti = risultati;
    aggiornaLista();

    const listaContatti = document.querySelector('.lista-contatti');
    const mostraTuttiBtn = document.createElement('button');
    mostraTuttiBtn.textContent = "Mostra Tutti";
    mostraTuttiBtn.onclick = mostraTuttiIContatti;
    listaContatti.appendChild(mostraTuttiBtn);
}

function mostraTuttiIContatti() {
    contatti = [...contattiOriginali];
    aggiornaLista();
    const mostraTuttiBtn = document.querySelector('.lista-contatti button[onclick="mostraTuttiIContatti()"]');
    if (mostraTuttiBtn) mostraTuttiBtn.remove();
}

function toggleListaContatti() {
    const listaContatti = document.querySelector('.lista-contatti');
    if (listaContatti.style.display === 'none' || listaContatti.style.display === '') {
        listaContatti.style.display = 'block';
    } else {
        listaContatti.style.display = 'none';
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