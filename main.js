import './src/components/contenedorJuegos/contenedorJuegos.css'
import './src/components/Navegador/navegador.css'
import './src/components/bienvenida/bienvenida.css'
import './src/components/componentesVisuales/modalContacto.css'
import './src/components/componentesVisuales/modalGanador.css'
import './src/components/Juegos/Memoria/memoria.css'
import './src/components/Juegos/cazaPokemon/cazaPokemon.css'
import './src/components/Juegos/tresEnRaya/tresEnRaya.css'
import './src/styles/responsive.css'
import { crearNavegador } from './src/components/Navegador/navegador.js'
import { ContenedorJuegos } from './src/components/contenedorJuegos/contenedorJuegos.js'
import { bienvenida as crearBienvenida } from './src/components/bienvenida/bienvenida.js'
import { juegoMemoria } from './src/components/Juegos/Memoria/memoria.js'
import { juegoTresEnRaya } from './src/components/Juegos/tresEnRaya/tresEnRaya.js'
import { juegoCazaPokemon } from './src/components/Juegos/cazaPokemon/cazaPokemon.js'
import { mostrarContacto } from './src/components/componentesVisuales/modalContacto.js'
import { limpiarJuegoCazaPokemon } from './src/components/Juegos/cazaPokemon/funcionesCapturaPokemon/limpiarJuegoCazaPokemon.js'
import { volverAInicio } from './src/volverAInicio/volverAInicio.js'

const app = document.getElementById('app')
app.innerHTML = ''

const contenedorPrincipal = document.createElement('main')
contenedorPrincipal.id = 'contenedor_juego'

app.appendChild(crearNavegador())

const bienvenida = crearBienvenida((seleccion) => {
  document.body.removeChild(bienvenida)
  app.appendChild(contenedorPrincipal)
  if (seleccion === 1) {
    ContenedorJuegos(juegoMemoria())
  } else if (seleccion === 2) {
    ContenedorJuegos(juegoTresEnRaya())
  } else if (seleccion === 3) {
    ContenedorJuegos(juegoCazaPokemon())
  }
})
document.body.appendChild(bienvenida)

const nav = document.querySelector('.navegador')

nav.addEventListener('click', (e) => {
  const id = e.target.id
  if (id === 'btnInicio') {
    try {
      limpiarJuegoCazaPokemon()
    } catch {}
    volverAInicio()
  } else if (id === 'btnContacto') {
    mostrarContacto()
  }
})
