import { estadoCazaPokemon } from './estadoCazaPokemon'

export function limpiarJuegoCazaPokemon() {
  if (estadoCazaPokemon.intervalo) {
    clearInterval(estadoCazaPokemon.intervalo)
    estadoCazaPokemon.intervalo = null
  }
  document.querySelectorAll('.pokemon').forEach((el) => el.remove())
  const modal = document.getElementById('modalGanador')
  if (modal) modal.style.display = 'none'
}
