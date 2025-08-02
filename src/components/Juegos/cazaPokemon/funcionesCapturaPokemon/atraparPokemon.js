export function atraparPokemon(poke, campo, contador, contadorEl, vivos) {
  contador++
  contadorEl.textContent = 'Capturas: ' + contador
  campo.removeChild(poke)
  vivos--
  return { contador, vivos }
}
