import './cazaPokemon.css'
import { mostrarVentanaGanadora } from '../../componentesVisuales/modalGanador.js'
import { ContenedorJuegos } from '../../contenedorJuegos/contenedorJuegos.js'
import pikachuImg from '../../../assets/pikachu.png'
import rattataImg from '../../../assets/rattata.png'
import squirtleImg from '../../../assets/squirtle.png'
import snorlaxImg from '../../../assets/snorlax.png'
import caterpieImg from '../../../assets/caterpie.png'
import ultraBallImg from '../../../assets/ultraBall.png'

import { posicionAleatoria } from './funcionesCapturaPokemon/posicionAleatoria.js'
import { guardarRecordCazaPokemon } from './funcionesCapturaPokemon/guardarRecordCazaPokemon.js'
import { obtenerRecordCazaPokemon } from './funcionesCapturaPokemon/obtenerRecord.js'
import { estadoCazaPokemon } from './funcionesCapturaPokemon/estadoCazaPokemon.js'

export function juegoCazaPokemon() {
  const spawnIntervaloPokemon = 500
  const maxVivos = 8
  const renovarTiempo = spawnIntervaloPokemon * maxVivos
  let juegoTerminado = false

  const divPrincipalCampo = document.createElement('div')
  divPrincipalCampo.className = 'divCampo'

  const record = obtenerRecordCazaPokemon()
  const recordEl = document.createElement('div')
  recordEl.className = 'record'
  recordEl.textContent = 'Récord: ' + record

  let contador = 0

  function obtenerVelocidadActual() {
    if (contador > 40) return 200
    if (contador > 25) return 300
    if (contador > 10) return 400
    return 500
  }
  const contadorEl = document.createElement('div')
  contadorEl.className = 'contador'
  contadorEl.textContent = 'Capturas: ' + contador

  const campo = document.createElement('div')
  campo.className = 'campo'

  divPrincipalCampo.append(recordEl, contadorEl, campo)

  function lanzarPokemon() {
    if (vivos >= maxVivos || juegoTerminado) {
      terminarJuego()
      return
    }
    if (vivos === maxVivos - 1 && !juegoTerminado) {
      campo.classList.add('temblando')
      setTimeout(() => campo.classList.remove('temblando'), 400)
    }

    const poke = document.createElement('img')
    poke.src = ICONOS[Math.floor(Math.random() * ICONOS.length)]
    poke.className = 'pokemon'
    const { x, y } = posicionAleatoria(campo, poke.clientWidth || 40)
    poke.style.left = x + 'px'
    poke.style.top = y + 'px'
    vivos++
    campo.appendChild(poke)

    const vida = setTimeout(() => {
      if (campo.contains(poke)) {
        campo.removeChild(poke)
        vivos--
        if (vivos >= maxVivos && !juegoTerminado) terminarJuego()
      }
    }, renovarTiempo)

    poke.addEventListener('click', () => {
      clearTimeout(vida)
      atrapar(poke)
    })
    const velocidad = obtenerVelocidadActual()
    estadoCazaPokemon.intervalo = setTimeout(lanzarPokemon, velocidad)
  }

  const ICONOS = [pikachuImg, caterpieImg, squirtleImg, rattataImg, snorlaxImg]
  let vivos = 0

  lanzarPokemon()

  function atrapar(pokeElemento) {
    if (!campo.contains(pokeElemento)) return

    campo.removeChild(pokeElemento)
    vivos--
    contador++
    contadorEl.textContent = 'capturas: ' + contador

    const bola = document.createElement('img')
    bola.src = ultraBallImg
    bola.className = 'pokeball'
    bola.style.position = 'absolute'
    bola.style.pointerEvents = 'none'

    const pokeRect = pokeElemento.getBoundingClientRect()
    const campoRect = campo.getBoundingClientRect()
    bola.style.width = pokeRect.width + 'px'
    bola.style.height = pokeRect.height + 'px'
    bola.style.left = pokeRect.left - campoRect.left + 'px'
    bola.style.top = pokeRect.top - campoRect.top + 'px'

    campo.appendChild(bola)

    setTimeout(() => {
      if (campo.contains(bola)) campo.removeChild(bola)
    }, 300)
  }
  function terminarJuego() {
    if (juegoTerminado) return
    juegoTerminado = true

    clearInterval(estadoCazaPokemon.intervalo)
    estadoCazaPokemon.intervalo = null

    const nuevoRecord = guardarRecordCazaPokemon(contador)
    const mensaje = nuevoRecord
      ? '¡Nuevo récord: ' + contador + ' capturas!'
      : 'Has capturado ' +
        contador +
        ' Entrenador, el récord sigue en ' +
        obtenerRecordCazaPokemon()
    mostrarVentanaGanadora(
      () => ContenedorJuegos(juegoCazaPokemon()),
      'Fin del juego.<br>' + mensaje,
      'Volver a empezar'
    )
  }
  return divPrincipalCampo
}
