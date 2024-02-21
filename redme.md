# Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? 
Abbiamo visto qualcosa di particolare che possiamo usare?

Si, lo abbiamo intravisto mentre facevamo la lezione sulle stringhe e i numeri (Cerco un operatore che fa al caso mio)

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
:insetto: Ricordate di usare il console.log() sia in fase di preparazione e verifica dei dati che ovviamente durante il degugging per scovare potenziali errori!

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


## Tools

- let/cons
- for 
- qualcosa che capisca se i numeri sono divisibili per 3
- qualcosa che capisca se i numeri sono divisibili per 5
	- % da il resto di una divisione

- if/else
- log()
- 


## Steps

- Creare un ciclo che stampi in console i numeri da 1 a 100 con for e mettere il consolo.log(i)
- ad ogni loop dobbiamo controllare se quel numero è divisibile per 3 o per 5
	- se il resto di i/3 e il resto di i/5 è uguale a 0 allora il numero è un multiplo di 3 se di 5 quindi stampa fizzbuzz
	- altrimenti se il resto di i/5 è uguale a 0 allora il numero è un multiplo di 3 quindi stampa fizz
	- altrimenti se il resto di i/3 è uguale a 0 allora il numero è un multiplo di 5 quindi stampa buzz
	
- se non è questo caso stampi in console log il valore di i
