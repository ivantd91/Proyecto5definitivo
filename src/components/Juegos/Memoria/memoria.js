import './memoria.css'
import './cartas.css'
import { imagenesPokemon } from '../../../assets/imagenesCartas.js'
import { crearCarta } from './crearCarta.js'
import { mostrarVentanaGanadora } from '../../componentesVisuales/modalGanador.js'
import { ContenedorJuegos } from '../../contenedorJuegos/contenedorJuegos.js'
import { volverAInicio } from '../../../volverAInicio/volverAInicio.js'
import {
  guardarRecordMemoria,
  obtenerRecordMemoria
} from './guardarRecordMemoria.js'

let cartasSeleccionadas = []
let bloqueado = false
let intentos = 0

function girarCarta(carta, id) {
  if (bloqueado) return
  if (
    carta.classList.contains('acertada') ||
    carta.classList.contains('activa')
  )
    return
  if (cartasSeleccionadas.length === 1 && cartasSeleccionadas[0] === carta)
    return
  if (cartasSeleccionadas.length === 2) return

  carta.classList.add('activa')
  carta.dataset.pokemonId = id
  cartasSeleccionadas.push(carta)

  if (cartasSeleccionadas.length === 2) {
    bloqueado = true
    intentos++

    const carta1 = cartasSeleccionadas[0]
    const carta2 = cartasSeleccionadas[1]

    const id1 = carta1.dataset.pokemonId
    const id2 = carta2.dataset.pokemonId

    if (id1 === id2) {
      carta1.classList.add('acertada')
      carta2.classList.add('acertada')

      cartasSeleccionadas = []
      bloqueado = false

      const totalParejas = document.querySelectorAll('.carta').length / 2
      const acertada = document.querySelectorAll('.acertada').length / 2

      if (acertada === totalParejas) {
        const nuevoRecord = guardarRecordMemoria(intentos)
        const recordActual = obtenerRecordMemoria()
        const mensaje = nuevoRecord
          ? `¡Nuevo récord: ${intentos} intentos!`
          : `Has ganado en ${intentos} intentos. El récord sigue en ${recordActual}.`
        mostrarVentanaGanadora(
          () => ContenedorJuegos(juegoMemoria()),
          mensaje,
          () => volverAInicio()
        )
      }
    } else {
      setTimeout(() => {
        carta1.classList.remove('activa')
        carta2.classList.remove('activa')
        carta1.removeAttribute('data-pokemon-id')
        carta2.removeAttribute('data-pokemon-id')

        cartasSeleccionadas = []
        bloqueado = false
      }, 600)
    }
  }
}
export function reiniciarPartida(contenedor_juego) {
  contenedor_juego.innerHTML = ''
  cartasSeleccionadas = []
  bloqueado = false
  intentos = 0
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
