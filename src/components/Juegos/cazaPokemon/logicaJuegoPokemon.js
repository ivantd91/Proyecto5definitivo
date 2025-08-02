import { obtenerRecordCazaPokemon } from './funcionesCapturaPokemon/obtenerRecord.js'
import { estadoCazaPokemon } from './funcionesCapturaPokemon/estadoCazaPokemon.js'
import { posicionAleatoria } from './funcionesCapturaPokemon/posicionAleatoria.js'
import { obtenerVelocidadActual } from './obtenerVelocidadActual.js'
import { atraparPokemon } from './funcionesCapturaPokemon/atraparPokemon.js'
import { terminarJuego } from './terminarJuego.js'

import pikachuImg from '../../../assets/pikachu.png'
import rattataImg from '../../../assets/rattata.png'
import squirtleImg from '../../../assets/squirtle.png'
import snorlaxImg from '../../../assets/snorlax.png'
import caterpieImg from '../../../assets/caterpie.png'

export function iniciarJuegoCazaPokemon() {
  const spawnIntervaloPokemon = 500
  const maxVivos = 8
  const renovarTiempo = spawnIntervaloPokemon * maxVivos
  let juegoTerminado = false
  let contador = 0
  let vivos = 0

  const divPrincipalCampo = document.createElement('div')
  divPrincipalCampo.className = 'divCampo'

  const record = obtenerRecordCazaPokemon()
  const recordEl = document.createElement('div')
  recordEl.className = 'record'
  recordEl.textContent = 'Récord: ' + record

  const contadorEl = document.createElement('div')
  contadorEl.className = 'contador'
  contadorEl.textContent = 'Capturas: ' + contador

  const campo = document.createElement('div')
  campo.className = 'campo'

  divPrincipalCampo.append(recordEl, contadorEl, campo)

  const contenedor = document.querySelector('#contenedor_juego')
  contenedor.innerHTML = ''
  contenedor.appendChild(divPrincipalCampo)

  const ICONOS = [pikachuImg, caterpieImg, squirtleImg, rattataImg, snorlaxImg]

  function lanzarPokemon() {
    if (vivos >= maxVivos || juegoTerminado) {
      juegoTerminado = true
      clearTimeout(estadoCazaPokemon.intervalo)
      terminarJuego(contador)
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

        if (vivos >= maxVivos && !juegoTerminado) {
          juegoTerminado = true
          clearTimeout(estadoCazaPokemon.intervalo)
          terminarJuego(contador)
        }
      }
    }, renovarTiempo)

    poke.addEventListener('pointerdown', () => {
      clearTimeout(vida)
      const resultado = atraparPokemon(poke, campo, contador, contadorEl, vivos)
      contador = resultado.contador
      vivos = resultado.vivos
      contadorEl.textContent = 'Capturas: ' + contador
    })

    const velocidad = obtenerVelocidadActual(contador)
    estadoCazaPokemon.intervalo = setTimeout(lanzarPokemon, velocidad)
  }

  lanzarPokemon()

  return divPrincipalCampo
}
