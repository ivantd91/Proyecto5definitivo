export function guardarRecordCazaPokemon(puntuacion) {
  const clave = 'recordCazaPokemon'
  const actual = parseInt(localStorage.getItem(clave)) || 0
  if (puntuacion > actual) {
    localStorage.setItem(clave, puntuacion)
    return true
  }
  return false
}
