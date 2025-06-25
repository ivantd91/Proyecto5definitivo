import './modalGanador.css'
export function mostrarVentanaGanadora(
  reiniciarJuego,
  titulo = '🎉Enhorabuena!!!🏆🏆'
) {
  const fondo = document.createElement('div')
  fondo.className = 'fondoModal'

  const modal = document.createElement('div')
  modal.className = 'modalGanador'

  const tituloModal = document.createElement('h2')
  tituloModal.innerHTML = titulo

  const mensaje = document.createElement('p')
  mensaje.textContent = 'Buena Partida!!'

  const botonReiniciar = document.createElement('button')
  botonReiniciar.textContent = ' Jugar de nuevo '
  botonReiniciar.className = 'btnReiniciar'

  botonReiniciar.addEventListener('click', () => {
    fondo.remove()
    reiniciarJuego()
  })
  modal.appendChild(tituloModal)
  modal.appendChild(mensaje)
  modal.appendChild(botonReiniciar)
  fondo.appendChild(modal)
  document.body.appendChild(fondo)
}
