export function obtenerVelocidadActual(contador) {
  if (contador > 40) return 200
  if (contador > 25) return 300
  if (contador > 10) return 400
  return 500
}
