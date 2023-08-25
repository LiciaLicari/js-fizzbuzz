// console.log("Hello World");
/* Aggiungo gli elementi alla DOM */

/* 

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
- Per i multipli di 3 stampi “Fizz” al posto del numero
- Per i multipli di 5 stampi “Buzz”.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
- Altrimenti stampo il numero.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:


BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## Tools
- const
- log
- for
- log
- if/ else if/ else if/ else
- stampo in pagina
*/



//creo elementi nel dom
const boardEl = document.getElementById("board");

//stampo i numeri
for (let i = 1; i <= 100; i++) {
  console.log(i);
  const card = document.createElement("div");

  let number = i;
  if (number % 3 == 0 && number % 5 == 0) {
      //Altrimenti se il numero è divisibile sia per 3 sia per 5 scrivo fizzbuzz
    number = "FizzBuzz";
    
} else if (number % 3 == 0) {
      //Se il numero è divisibile per 3 scrivo fizz
    number = "Fizz";
  } else if (number % 5 == 0) {
      //Altrimenti se il umero è divisibile per 5 scrivo buzz
    number = "Buzz";
  }
  console.log(number);
  card.classList.add("cardNumber");
  card.append(number);
  boardEl.append(card);
}



