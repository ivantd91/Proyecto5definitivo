import ultraBallImg from '../../../../assets/ultraBall.png'

export function atrapar(
  pokeElemento,
  campo,
  contador,
  actualizarContador,
  reducirVivos
) {
  const bola = document.createElement('img')
  bola.src = ultraBallImg
  bola.className = 'pokeball'
  bola.style.position = 'absolute'
  bola.style.pointerEvents = 'none'

  const pokeRect = pokeElemento.getBoundingClientRect()
  const campoRect = campo.getBoundingClientRect()
  const width = pokeRect.width + 'px'
  const height = pokeRect.height + 'px'
  const left = pokeRect.left - campoRect.left + 'px'
  const top = pokeRect.top - campoRect.top + 'px'

  bola.style.width = width
  bola.style.height = height
  bola.style.left = left
  bola.style.top = top

  campo.appendChild(bola)

  setTimeout(() => {
    if (campo.contains(bola)) campo.removeChild(bola)
    if (campo.contains(pokeElemento)) {
      campo.removeChild(pokeElemento)
      reducirVivos()
      actualizarContador()
    }
  }, 300)
}
