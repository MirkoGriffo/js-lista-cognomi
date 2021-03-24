/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
*/

var cognomeUtente = prompt("Inserisci il tuo cognome").toUpperCase();

var cognomi = ["BIANCHI", "NERI", "ROSSI", "VERDI", "GIALLI"];

var conta = 1; // variabile per contare posizione in cui si trova il cognome inserito

cognomi.push(cognomeUtente);

cognomi.sort();

console.log(cognomi);

var lista = "";

for (i = 0; i < cognomi.length; i++) {
  lista += "<li>" + cognomi[i] + "</li>";
}

document.getElementById("listaCognomi").innerHTML = lista;

for (i = 0; i < cognomi.length; i++) {
  if (cognomeUtente === cognomi[i]) {
    document.getElementById("posizione").innerHTML = conta;
  } else {
    conta++;
  }
}
