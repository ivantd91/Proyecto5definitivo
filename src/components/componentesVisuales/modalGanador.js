import './modalGanador.css'

export function mostrarVentanaGanadora(
  reiniciarJuego,
  titulo = '🎉Enhorabuena!!!🏆🏆',
  salir = null
) {
  const fondo = document.createElement('div')
  fondo.className = 'fondoModal'

  const modal = document.createElement('div')
  modal.className = 'modalGanador'

  const tituloModal = document.createElement('h2')
  tituloModal.innerHTML = titulo
  modal.appendChild(tituloModal)

  const mensaje = document.createElement('p')
  mensaje.textContent = 'Buena Partida!!'
  modal.appendChild(mensaje)

  if (reiniciarJuego) {
    const botonReiniciar = document.createElement('button')
    botonReiniciar.textContent = ' Jugar de nuevo '
    botonReiniciar.className = 'btnReiniciar'

    botonReiniciar.addEventListener('click', () => {
      fondo.remove()
      reiniciarJuego()
    })
    modal.appendChild(botonReiniciar)
  }

  if (salir) {
    const botonSalir = document.createElement('button')
    botonSalir.textContent = 'Salir'
    botonSalir.className = 'btnReiniciar'
    botonSalir.addEventListener('click', () => {
      fondo.remove()
      if (typeof salir === 'function') salir()
    })
    modal.appendChild(botonSalir)
  }
  fondo.appendChild(modal)
  document.body.appendChild(fondo)
}
