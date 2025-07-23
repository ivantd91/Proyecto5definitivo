export function posicionAleatoria(contenedor, tamañoIcono = 40) {
  const ancho = contenedor.clientWidth
  const alto = contenedor.clientHeight
  const x = Math.random() * (ancho - tamañoIcono)
  const y = Math.random() * (alto - tamañoIcono)
  return { x, y }
}
