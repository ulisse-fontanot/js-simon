var listaRandom = [];
var listaUtente = [];

while(listaRandom.length < 5){
  var random = numeri(1,20);
  if (!listaRandom.includes(random)) {
    listaRandom.push(random);
  }
}

console.log(listaRandom);

function numeri(min,max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
