var listaRandom = [];
var listaUtente = [];
var giusti = [];
var numeroUtente;

//LISTA RANDOM
while(listaRandom.length < 5){
  var random = numeri(1,20);
  if (!listaRandom.includes(random)) {
    listaRandom.push(random);
  }
}
console.log(listaRandom);
alert(listaRandom);

//LISTA UTENTE
setTimeout(myFunction, 3000);
function myFunction() {
  while(listaUtente.length < 5) {
    numeroUtente = parseInt(prompt("inserisci numero"));
    if (numeroUtente <= 20 && numeroUtente > 0) {
      if (!listaUtente.includes(numeroUtente)) {
        listaUtente.push(numeroUtente);
      }
    }else {
      alert("inserisci un numero tra 1 e 20")
    }
  }
  console.log(listaUtente);

  //CONTROLLO VITTORIA
  if (listaRandom.includes(numeroUtente)) {
    console.log("hai indovinato");
    alert("hai indovinato");
  }
}



//FUNZIONI RIUTILIZZABILI
function numeri(min,max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
