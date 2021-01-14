var listaRandom = [];
var listaUtente = [];

setTimeout(myFunction, 3000);

while(listaRandom.length < 5){
  var random = numeri(1,20);
  if (!listaRandom.includes(random)) {
    listaRandom.push(random);
  }
}

console.log(listaRandom);
alert(listaRandom);


function myFunction() {
  while(listaUtente.length < 5) {
    var numeroUtente = parseInt(prompt("inserisci numero"));
    if (numeroUtente <= 20 && numeroUtente > 0) {
      if (!listaUtente.includes(numeroUtente)) {
        numeroUtente = parseInt(prompt("inserisci numero"));
        listaUtente.push(numeroUtente);
      }
    }else {
      alert("inserisci un numero tra 1 e 20")
    }

  }
}
console.log(listaUtente);

function numeri(min,max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
