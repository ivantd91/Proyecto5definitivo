import { mostrarVentanaGanadora } from '../../componentesVisuales/modalGanador.js'
import { guardarRecordCazaPokemon } from './funcionesCapturaPokemon/guardarRecordCazaPokemon.js'
import { obtenerRecordCazaPokemon } from './funcionesCapturaPokemon/obtenerRecord.js'
import { ContenedorJuegos } from '../../contenedorJuegos/contenedorJuegos.js'
import { juegoCazaPokemon } from './cazaPokemon.js'

export function terminarJuego(contador) {
  const nuevoRecord = guardarRecordCazaPokemon(contador)
  const recordActual = obtenerRecordCazaPokemon()

  const mensaje = nuevoRecord
    ? `¡Nuevo récord: ${contador} capturas!`
    : `Has capturado ${contador} Pokémon. El récord sigue en ${recordActual}.`

  mostrarVentanaGanadora(
    () => ContenedorJuegos(juegoCazaPokemon()),
    mensaje,

    () => window.location.reload()
  )
}
