// criando uma nova lista
const listasDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
console.log(listasDeDestinos);

const idadeComprador = 21;

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listasDeDestinos.splice(1, 1);
} else {
  console.log("Comprador menor de idade e não pode vender");
}

// adicionando um item na lista
console.log("Destinos possíveis");
console.log(listasDeDestinos);

