import { ContenedorJuegos } from '../components/contenedorJuegos/contenedorJuegos.js'
import { bienvenida as crearBienvenida } from '../components/bienvenida/bienvenida.js'
import { juegoMemoria } from '../components/Juegos/Memoria/memoria.js'
import { juegoTresEnRaya } from '../components/Juegos/tresEnRaya/tresEnRaya.js'
import { juegoCazaPokemon } from '../components/Juegos/cazaPokemon/cazaPokemon.js'

export function volverAInicio() {
  document
    .querySelectorAll('.fondoModal, .modalGanador')
    .forEach((n) => n.remove())

  const app = document.getElementById('app') || document.body
  const contenedor = document.getElementById('contenedor_juego')
  if (contenedor) {
    contenedor.innerHTML = ''
    if (app.contains(contenedor)) app.removeChild(contenedor)
  }

  if (!document.querySelector('.bienvenida')) {
    document.body.appendChild(crearBienvenida(seleccionarJuego))
  }
}

function seleccionarJuego(i) {
  const app = document.getElementById('app') || document.body
  let contenedor = document.getElementById('contenedor_juego')
  if (!contenedor) {
    contenedor = document.createElement('main')
    contenedor.id = 'contenedor_juego'
  }
  if (!app.contains(contenedor)) app.appendChild(contenedor)

  if (i === 1) ContenedorJuegos(juegoMemoria())
  if (i === 2) ContenedorJuegos(juegoTresEnRaya())
  if (i === 3) ContenedorJuegos(juegoCazaPokemon())

  const bienvenida = document.querySelector('.bienvenida')
  if (bienvenida && document.body.contains(bienvenida)) {
    document.body.removeChild(bienvenida)
  }
}
