import './memoria.css'
import './cartas.css'
import { imagenesPokemon } from '../../../assets/imagenesCartas.js'
import { crearCarta } from './crearCarta.js'
import { mostrarVentanaGanadora } from '../../componentesVisuales/modalGanador.js'

let cartasSeleccionadas = []

function girarCarta(carta, id) {
  if (
    cartasSeleccionadas.length === 2 ||
    carta.classList.contains('acertada') ||
    carta.classList.contains('activada')
  )
    return

  carta.classList.add('activa')
  carta.dataset.pokemonId = id
  cartasSeleccionadas.push(carta)

  if (cartasSeleccionadas.length === 2) {
    const carta1 = cartasSeleccionadas[0]
    const carta2 = cartasSeleccionadas[1]

    const id1 = carta1.dataset.pokemonId
    const id2 = carta2.dataset.pokemonId

    if (id1 === id2) {
      carta1.classList.add('activa', 'acertada')
      carta2.classList.add('activa', 'acertada')
    } else {
      setTimeout(() => {
        carta1.classList.remove('activa')
        carta2.classList.remove('activa')
      }, 1000)
    }
    cartasSeleccionadas = []
    setTimeout(() => {
      const todasAcertadas = document.querySelectorAll('.acertada')
      if (todasAcertadas.length === 18) {
        mostrarVentanaGanadora(() => {
          reiniciarPartida(divPrincipalMemoria)
        })
      }
    }, 1200)
  }
}
export function reiniciarPartida(contenedor_juego) {
  contenedor_juego.innerHTML = ''
  cartasSeleccionadas = []
  const baraja = imagenesPokemon()
  baraja.forEach((pokemon) => {
    const carta = crearCarta(pokemon, girarCarta)
    contenedor_juego.appendChild(carta)
  })
}

export function juegoMemoria() {
  const divPrincipalMemoria = document.createElement('div')
  divPrincipalMemoria.className = 'divMemoria'

  reiniciarPartida(divPrincipalMemoria)
  return divPrincipalMemoria
}
