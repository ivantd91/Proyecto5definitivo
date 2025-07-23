import './src/components/contenedorJuegos/contenedorJuegos.css'
import { crearNavegador } from './src/components/Navegador/navegador.js'
import { ContenedorJuegos } from './src/components/contenedorJuegos/contenedorJuegos.js'
import { juegoMemoria } from './src/components/Juegos/Memoria/memoria.js'
import { juegoTresEnRaya } from './src/components/Juegos/tresEnRaya/tresEnRaya.js'
import { juegoCazaPokemon } from './src/components/Juegos/cazaPokemon/cazaPokemon.js'
import { limpiarJuegoCazaPokemon } from './src/components/Juegos/cazaPokemon/funcionesCapturaPokemon/limpiarJuegoCazaPokemon.js'

// 🔒 Bloquear zoom en iPhone y móviles
document.addEventListener('gesturestart', (e) => {
  e.preventDefault()
})
document.addEventListener('gesturechange', (e) => {
  e.preventDefault()
})
document.addEventListener('gestureend', (e) => {
  e.preventDefault()
})

// Evitar zoom por doble toque rápido
let lastTouchEnd = 0
document.addEventListener('touchend', (event) => {
  const now = new Date().getTime()
  if (now - lastTouchEnd <= 300) {
    event.preventDefault()
  }
  lastTouchEnd = now
})

const app = document.getElementById('app')
app.innerHTML = ''

const contenedorPrincipal = document.createElement('main')
contenedorPrincipal.id = 'contenedor_juego'

app.appendChild(crearNavegador())
app.appendChild(contenedorPrincipal)

//mostrar juego en botón
const nav = document.querySelector('.navegador')

nav.addEventListener('click', (e) => {
  if (e.target.id === 'btnJuego1') {
    limpiarJuegoCazaPokemon()
    ContenedorJuegos(juegoMemoria())
  }
  if (e.target.id === 'btnJuego2') {
    limpiarJuegoCazaPokemon()
    ContenedorJuegos(juegoTresEnRaya())
  }
  if (e.target.id === 'btnJuego3') {
    limpiarJuegoCazaPokemon()
    ContenedorJuegos(juegoCazaPokemon())
  }
})
