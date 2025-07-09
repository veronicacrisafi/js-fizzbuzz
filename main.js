/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?*/

//for Loop per stampare i numeri da 1 a 100 con incremento

for (let i = 1; i <= 100; i++) {
  console.log(i);

  //condizione per la quale se si tratta di un multiplo di 3 e 5 viene stampato FizzBuzz (prima lo avevo messo alla fine ma mettendolo alla fine non funzona, perché deve prima cercare i multipli di entrambi e poi se questa condizione non è veritiera passa alle altre due condizioni )
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // cerca i multipli di 3 e gli stampa Fizz
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // cerca i multipli di 5 e stampa Buzz
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
}
