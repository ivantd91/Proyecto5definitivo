import './navegador.css'
import './btnNavegador.css'
export function crearNavegador() {
  const headerNavegador = document.createElement('header')
  const navegador = document.createElement('nav')
  navegador.className = 'navegador'

  const btnPortfolio = document.createElement('button')
  btnPortfolio.className = 'boton_navegador'
  btnPortfolio.textContent = ' Visita mi Portfolio'
  btnPortfolio.addEventListener('click', () => {
    window.open('https://portfolio-mejorado-swart.vercel.app/') //enlace portfolio
  })
  const btnJuego1 = document.createElement('button')
  btnJuego1.id = 'btnJuego1'
  btnJuego1.className = 'boton_navegador'
  btnJuego1.textContent = 'Memoria Pokemon' //cambiar

  const btnJuego2 = document.createElement('button')
  btnJuego2.id = 'btnJuego2'
  btnJuego2.className = 'boton_navegador'
  btnJuego2.textContent = 'Tres en Raya' //cambiar

  const btnJuego3 = document.createElement('button')
  btnJuego3.id = 'btnJuego3'
  btnJuego3.className = 'boton_navegador'
  btnJuego3.textContent = 'Caza Pokémon' //cambiar

  const contacto = document.createElement('button')
  contacto.className = 'contacto'
  contacto.className = 'boton_navegador'
  contacto.textContent = 'Contacto'

  navegador.appendChild(btnPortfolio)
  navegador.appendChild(btnJuego1)
  navegador.appendChild(btnJuego2)
  navegador.appendChild(btnJuego3)
  navegador.appendChild(contacto)
  headerNavegador.appendChild(navegador)
  return headerNavegador
}
