import './tresEnRaya.css'
import { mostrarVentanaGanadora } from '../../componentesVisuales/modalGanador.js'

export function juegoTresEnRaya() {
  let tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  let turno = 'X'

  let perdida = false

  const divPrincipalTresEnRaya = document.createElement('div')
  divPrincipalTresEnRaya.className = 'divTresEnRaya'

  const info = document.createElement('div')
  info.className = 'infoTresEnRaya'
  info.textContent = `turno: ${turno}`
  divPrincipalTresEnRaya.appendChild(info)

  const grid = document.createElement('div')
  grid.className = 'tableroTresEnRaya'

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const celda = document.createElement('div')
      celda.className = 'celdaTresEnRaya'

      celda.addEventListener('click', () => clickCelda(i, j, celda))
      grid.appendChild(celda)
    }
  }

  divPrincipalTresEnRaya.appendChild(grid)

  return divPrincipalTresEnRaya

  function clickCelda(i, j, celdaEl) {
    if (tablero[i][j] || perdida) return

    tablero[i][j] = turno
    celdaEl.textContent = turno
    celdaEl.classList.add(turno === 'X' ? 'celdaX' : 'celdaO')

    if (comprobarGanador()) {
      perdida = true
      mostrarVentanaGanadora(() => {
        const app = document.getElementById('app')
        const nav = app.firstElementChild
        app.innerHTML = ''
        app.appendChild(nav)
        const nuevo = juegoTresEnRaya()
        app.appendChild(nuevo)
      }, `¡<span class="jugador${turno}">${turno}</span> ha ganado 🎉!`)
      return
    }
    if (tablero.flat().every((c) => c)) {
      perdida = true
      mostrarVentanaGanadora(() => {
        const app = document.getElementById('app')
        const nav = app.firstElementChild
        app.innerHTML = ''
        app.appendChild(nav)
        const nuevo = juegoTresEnRaya()
        app.appendChild(nuevo)
      }, `¡<span class="empate">Empate 😐</span>!`)
      return
    }
    turno = turno === 'X' ? 'O' : 'X'
    info.textContent = `turno: ${turno}`
  }

  function comprobarGanador() {
    const lineas = [
      [
        [0, 0],
        [0, 1],
        [0, 2]
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2]
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2]
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0]
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1]
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2]
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2]
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0]
      ]
    ]
    return lineas.some(([a, b, c]) => {
      const victoriaA = tablero[a[0]][a[1]]
      if (!victoriaA) return false
      return (
        victoriaA === tablero[b[0]][b[1]] && victoriaA === tablero[c[0]][c[1]]
      )
    })
  }
}
