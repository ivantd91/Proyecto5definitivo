export function guardarRecordMemoria(intentos) {
  const record = 'recordMemoria'
  const actual = parseInt(localStorage.getItem(record)) || Infinity
  if (intentos < actual) {
    localStorage.setItem(record, intentos)
    return true
  }
  return false
}

export function obtenerRecordMemoria() {
  return parseInt(localStorage.getItem('recordMemoria')) || 0
}
