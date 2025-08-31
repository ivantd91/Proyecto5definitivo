export function guardarRecordTresEnRaya(jugador, victorias) {
  const recordJugador = `recordTresEnRaya_${jugador}`
  const actual = parseInt(localStorage.getItem(recordJugador)) || 0
  if (victorias > actual) {
    localStorage.setItem(recordJugador, victorias)
    return true
  }
  return false
}

export function obtenerRecordTresEnRaya(jugador) {
  const recordJugador = `recordTresEnRaya_${jugador}`
  return parseInt(localStorage.getItem(recordJugador)) || 0
}
