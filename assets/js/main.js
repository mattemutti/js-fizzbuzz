


let elementList = document.getElementById("list_number");
let ul = document.querySelector("ul.list");



// - Creare un ciclo che stampi in conso le i numeri da 1 a 100 con for e mettere il consolo.log(i)
for(let i = 1; i < 101; i++){

//	console.log(i);

// salvare il valore del resto della divisione del numero / 3 (se divisibile 0 altrimenti 1) in una variabile
	let numerodivisibileX3 = i % 3;

// salvare il valore del resto della divisione del numero / 5 (se divisibile 0 altrimenti 1) in una variabile
	let numerodivisibileX5 = i % 5;

	let li = document.createElement ("li");

	
	// 	- se il resto di i/3 e il resto di i/5 è uguale a 0 allora il numero è un multiplo di 3 se di 5 quindi stampa FizzBuzz
	if (numerodivisibileX3 == 0 && numerodivisibileX5 == 0) {
		console.log("FizzBuzz");
		//elementList.innerHTML += `<li>FizzBuzz</li>`;
		li.append('FizzBuzz');
		ul.append(li);
		
	// 	- altrimenti se il resto di i/3 è uguale a 0 e il resto di i/5 è diverso da 0 allora il numero è un multiplo di 3 quindi stampa Fizz
	} else if (numerodivisibileX3 == 0 && numerodivisibileX5 != 0 ) {
		console.log("Fizz");
		//elementList.innerHTML += `<li>Fizz</li>`;
		li.append('Fizz');
		ul.append(li);

	// 	- altrimenti se il resto di i/3 è diverso da 0 e il resto di i/5 è uguale a 0 allora il numero è un multiplo di 5 quindi stampa Buzz
	} else if (numerodivisibileX3 != 0 && numerodivisibileX5 == 0 ) {
		console.log("Buzz");
		//elementList.innerHTML += `<li>Buzz</li>`;
		li.append('Buzz');
		ul.append(li);


	// - se non è questo caso stampi in console log il valore di i
	} else{ 
		console.log(i);
		//elementList.innerHTML += `<li>${i}</li>`;
		
		li.append(i);
		ul.append(li);
	
		


	}


	// 	- altrimenti se il resto di i/3 è uguale a 0 allora il numero è un multiplo di 5 quindi stampa buzz


}

// - ad ogni loop dobbiamo controllare se quel numero è divisibile per 3 o per 5

	





// Prova numeri divisibili per 3
// let x = 30
// let y = x % 3
// console.log(typeof y, y);
// se un numero è divisibili per 3 come risultato darà = 0 altrimenti darà 1 (idem per il numero 5)


