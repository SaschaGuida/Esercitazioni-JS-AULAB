# Readme_Esercitazioni_AULAB-JS
Esercitazione 1 - Introduzione JS - 11-07-2023

Crea un file HTML e inserisci un tag script prima della chiusura del body. Poi al suo interno esegui i seguenti passaggi: 

- dichiara una variabile num1, e assegnale un numero qualsiasi 
- dichiara una variabile num2, e assegnale un numero qualsiasi 
- visualizza a schermo “Il valore della variabile num1 e' tot“. Fai la stessa cosa per num2 
- dichiara una variabile chiamata stringa, e assegnale come valore una stringa qualsiasi
- stampa a schermo “Il valore della variabile stringa e' tot“
- sostituisci il valore della variabile stringa con un qualsiasi altro valore e poi stampalo a schermo. 
- dichiara una costante chiamata PIGRECO, e assegnale un valore di 3.14159265359 
- visualizza a schermo “il valore di PIGRECO e' tot”
- prova a cambiare il valore della costante e vedi cosa succede


_____________________________________________________________________________________________________________________


Esercitazione 2 - I tipi di dati e gli operatori matematici - 13-07-2023

Traccia 1: Crea 5 variabili contenenti un numero e scrivi un programma in modo da ottenere la somma tra questi numeri e la media. In console poi mostra la seguente frase: ‘La somma tra i numeri equivale a … e la media equivale a…’

Traccia 2: Crea due variabili contenenti l’anno corrente e l’anno di nascita di una persona. Crea un programma che calcoli: 

- l’eta' della persona 
- quanti anni sono necessari per raggiungere i 100 In console poi mostra la frase “Hai tot anni e ti mancano tot anni per compierne 100“.

Traccia 3: Crea due variabili i cui valori verranno scelti dall’utente. Crea un programma che esegua i seguenti calcoli su quei due numeri: 

- somma 
- sottrazione 
- moltiplicazione 
- divisione 

 In seguito in console stampa la frase “Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (tot), sottrazione(tot) ecc ecc“.
 
 
 
 ____________________________________________________________________________________________________________________
 
 
 
 
Esercitazione 3 - L’oggetto Math, operatori logici e controllo di flusso - 27-07-2023

Traccia 1: Crea due variabili, una che contiene il numero totale dei gatti e una che contiene il numero dei gatti in fila. Scrivi quindi un programma che calcoli: 

- Il numero di file risultanti
- Il numero di gatti mancanti per completare una nuova fila
- Quanti gatti rimangono fuori In seguito

Stampa in console la frase “Ci sono X file di gatti e ne mancano Y per una nuova fila, con un avanzo di Z”

Traccia 2: Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:


- se v é minore di 18, stampare in console “insufficiente”
- se v é maggiore uguale a 18 e minore di 21, stampare in console “sufficiente”
- se v é maggiore uguale a 21 e minore di 24, stampare in console: “buono”
- se v é maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
- se v é maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
- se v é uguale a 30, stampare in console: “eccellente”

Traccia 3: Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:

se temperatura é minore di 20, stampare “non ci sono piu’ le mezze stagioni”
se temperatura é maggiore uguale a 30, stampare “lu mare, lu sule, lu ientu”
se temperatura é minore di 30, stampare “mi dia una peroni sudata”
se temperatura é minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
se temperatura é minore di -10, stampare “copriti…ancora ti raffreddi”

Traccia 4: Verifica se un numero è un anno bisestile utilizzando if-else

Per capire se un anno è bisestile occorre verificare se è un multiplo di 4, facendo però attenzione agli anni secolari.
Dato un qualsiasi anno, per capire se si tratta di un anno bisestile procederemo nel modo seguente:

- se è un anno secolare, allora è un anno bisestile solo se è divisibile per 400;
- se è un anno non secolare, tale anno è bisestile se è divisibile per 4.

Gli anni secolari sono quegli anni che stabiliscono la fine di un secolo, ossia quegli anni che terminano con almeno una coppia di zeri. Tra tali anni sono bisestili per convenzione solamente quelli divisibili per 400, ossia quelli per cui le cifre che precedono i due 00 sono divisibili per 4.



_____________________________________________________________________________________________________________________


Esercitazione 4: Le funzioni - 01-08-2023

Traccia 1: Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.

- Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
    - ogni dado ha 6 facce
    - ogni giocatore tirerà n volte
- Per ogni giocatore:
    - generare un numero casuale per ogni tiro che effettuerà
    - ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

TIPS:
Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);

Traccia 2: Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N

- N dovra’ rappresentare il parametro formale della funzione
- tutti i numeri multipli di 3 siano sostituiti dalla stringa ‘Fizz',
- tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
- e tutti i numeri multipli di 3 e 5 siano sostituiti dalla stringa ‘fizzBuzz'

Traccia 3: Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

Esempio:

- Input : 9 → output: 1 cifra
- Input : 99 → output: 2 cifre
- Input: 12000 → output: Numero troppo grande

Traccia 4: Scrivi una funzione chiamata `contaVocali` che prende in input una stringa e restituisce il numero di vocali presenti nella stringa (ignorando maiuscole/minuscole).
pren
Traccia 5:
Un gruppo di caratteri decidono di fare una battaglia. Aiutali a capire quale gruppo è il piu forte.
Crea una funzione che accetti due stringhe e ritorni quale delle due è più forte.

Regole:

- Ciascun carattere avrà il proprio potere: `A = 1, B = 2, ... Y = 25, Z = 26`
- Le stringhe saranno solo in maiuscolo
- Solo due gruppi posso lottare.
- Vince il gruppo la cui potenza totale (A + B + C + ...) è maggiore.
- Se le potenze sono uguali, è un pareggio.

Esempi:

- "ONE", "TWO" -> "TWO"` 
-  "ONE", "NEO" -> "Pareggio!"


----------

Esercitazione 5: Focus sui metodi degli array - 03-08-2023

Traccia 1: Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini:

- modo decrescente.
- In modo crescente.

Esempio:

- Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
- Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]

TIP: L’oggetto array mette a disposizione il metodo sort.

Traccia 2: Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output:

- la media
- tutti i valori minori della media

Esempio:

- Input ⇒ a = [3, 5, 10, 2, 8]
- Output ⇒ media = 5.6, valori minori = [3, 5, 2]

Traccia 3: Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

TIP: Puoi eliminare spazi e segni di punteggiatura usando ⇒ `str.replace(/\W/g, "")`

Traccia 4: Crea una funzione che prenda in input una array di numeri e restituisca i due numeri più alti all'interno dell'array.
Il valore restituito dovrà essere un array nel formato [seconda età più vecchia, età più vecchia].
L'ordine dei numeri passati potrebbe essere qualsiasi e includerà sempre almeno 2 elementi.

Esempi:

- [1, 2, 10, 8] --> [8, 10]
- [1, 5, 87, 45, 8, 8] --> [45, 87] 
- [1, 3, 10, 0] --> [3, 10]