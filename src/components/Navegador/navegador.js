import './navegador.css'
import './btnNavegador.css'

export function crearNavegador() {
  const headerNavegador = document.createElement('header')
  const navegador = document.createElement('nav')
  navegador.className = 'navegador'

  const btnInicio = document.createElement('button')
  btnInicio.id = 'btnInicio'
  btnInicio.className = 'boton_navegador'
  btnInicio.textContent = 'Inicio'

  const btnPortfolio = document.createElement('button')
  btnPortfolio.className = 'boton_navegador'
  btnPortfolio.textContent = ' Visita mi Portfolio'
  btnPortfolio.addEventListener('click', () => {
    window.open('https://portfolio-mejorado-swart.vercel.app/') //enlace portfolio
  })

  const btnContacto = document.createElement('button')
  btnContacto.id = 'btnContacto'
  btnContacto.className = 'boton_navegador'
  btnContacto.textContent = 'Contacto'

  navegador.appendChild(btnInicio)
  navegador.appendChild(btnPortfolio)

  navegador.appendChild(btnContacto)
  headerNavegador.appendChild(navegador)
  return headerNavegador
}
