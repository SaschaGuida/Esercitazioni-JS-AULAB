function mostraEsercizio(numeroEsercizio) {
    const exerciseContents = document.querySelectorAll('.exercise-content');
    exerciseContents.forEach(function(el) {
        el.classList.remove('active-exercise');
    });

    const esercizioSelezionato = document.getElementById(`exercise-${numeroEsercizio}`);
    esercizioSelezionato.classList.add('active-exercise');
}