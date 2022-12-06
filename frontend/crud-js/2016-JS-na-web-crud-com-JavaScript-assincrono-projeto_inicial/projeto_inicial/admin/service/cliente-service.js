const baseURL = `http://localhost:3000/profile`

const listaClientes = () => {
  return fetch(baseURL)
    .then(resposta => {
      return resposta.json()
    })
}

const criaClient = (nome, email) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  }).then(
    resposta => {
      return resposta.body
    }
  )
}

export const clienteService = {
  listaClientes,
  criaClient
}
