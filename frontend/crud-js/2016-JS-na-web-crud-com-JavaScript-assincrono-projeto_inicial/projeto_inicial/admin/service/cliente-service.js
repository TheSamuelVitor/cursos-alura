const baseURL = `http://localhost:3000/profile`

const listaClientes = () => {
  return fetch(baseURL)
    .then(resposta => {
      return resposta.json()
    })
}

const criaCliente = (nome, email) => {
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

const deletaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  deletaCliente
}
