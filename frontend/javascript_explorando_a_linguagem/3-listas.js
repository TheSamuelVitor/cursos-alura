// criando uma nova lista
const listasDeDestinos = new Array(
  'Salvador', 
  'São Paulo',
  'Rio de Janeiro'
);

// adicionando um item na lista
listasDeDestinos.push('Curitiba')
console.log(listasDeDestinos)

listasDeDestinos.splice(1,1)
console.log(listasDeDestinos)

console.log(listasDeDestinos[1])