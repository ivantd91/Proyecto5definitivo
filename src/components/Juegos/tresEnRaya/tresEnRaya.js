import './tresEnRaya.css'
import { mostrarVentanaGanadora } from '../../componentesVisuales/modalGanador.js'
import { ContenedorJuegos } from '../../contenedorJuegos/contenedorJuegos.js'
import xIcono from '../../../assets/x-icono.png'
import oIcono from '../../../assets/o-icono.png'

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
  divPrincipalTresEnRaya.appendChild(info)
  actualizarInfo()

  const grid = document.createElement('div')
  grid.className = 'tableroTresEnRaya'

  function actualizarInfo() {
    info.innerHTML = ''
    const imgInfo = document.createElement('img')
    imgInfo.src = turno === 'X' ? xIcono : oIcono
    imgInfo.alt = turno
    imgInfo.classList.add('marcador-info')
    info.appendChild(imgInfo)
  }

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
    celdaEl.innerHTML = ''
    const imagenIcono = document.createElement('img')
    imagenIcono.src = turno === 'X' ? xIcono : oIcono
    imagenIcono.alt = turno
    imagenIcono.classList.add('marcador')
    celdaEl.appendChild(imagenIcono)

    if (comprobarGanador()) {
      perdida = true
      const imgGanador = `<img src="${
        turno === 'X' ? xIcono : oIcono
      }" alt="${turno}" class="marcador-info">`
      mostrarVentanaGanadora(
        () => ContenedorJuegos(juegoTresEnRaya()),
        `¡${imgGanador} ha ganado 🎉!`,
        () => window.location.reload()
      )
      return
    }
    if (tablero.flat().every((c) => c)) {
      perdida = true
      mostrarVentanaGanadora(
        () => ContenedorJuegos(juegoTresEnRaya()),
        `¡<span class="empate">Empate 😐</span>!`
      ),
        () => window.location.reload()
      return
    }
    turno = turno === 'X' ? 'O' : 'X'
    actualizarInfo()
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

/*REVISAR*/
