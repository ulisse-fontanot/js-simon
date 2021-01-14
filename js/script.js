var listaRandom = [];
var listaUtente = [];

for (var i = 0; i < 5; i++){
  var random = numeri(1,20);
  if (listaRandom.includes(random)) {
    (listaRandom).push(random);
  }
}

console.log(listaRandom);

function numeri(min,max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
