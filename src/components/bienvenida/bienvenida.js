import './bienvenida.css'
export function bienvenida(activada) {
  const contenedorBienvenida = document.createElement('div')
  contenedorBienvenida.className = 'bienvenida'

  const juegos = ['Memoria', 'Tres en Raya', 'Caza Pokémon']
  juegos.forEach((texto, i) => {
    const btn = document.createElement('button')
    btn.className = 'btn-Bienvenida'
    btn.textContent = texto
    btn.addEventListener('click', () => activada(i + 1))
    contenedorBienvenida.appendChild(btn)
  })
  return contenedorBienvenida
}
