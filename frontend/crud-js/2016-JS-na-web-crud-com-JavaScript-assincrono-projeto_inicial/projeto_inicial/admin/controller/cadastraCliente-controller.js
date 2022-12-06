const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
  const nome = evento.target.querySelector('[data-nome]')
  const email = evento.target.querySelector('[data-email]')
})