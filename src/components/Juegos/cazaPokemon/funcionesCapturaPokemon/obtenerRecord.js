export function obtenerRecordCazaPokemon() {
  return parseInt(localStorage.getItem('recordCazaPokemon')) || 0
}
