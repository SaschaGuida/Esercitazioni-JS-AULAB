function mostraEsercizio(numeroEsercizio) {
    const exerciseContents = document.querySelectorAll('.exercise-content');

    exerciseContents.forEach(function(el) {
        if (el.id === `exercise-${numeroEsercizio}`) {
            el.classList.toggle('active-exercise');
        } else {
            el.classList.remove('active-exercise');
        }
    });
}
