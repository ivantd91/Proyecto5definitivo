import './modalContacto.css'

export function mostrarContacto() {
  if (document.querySelector('.tarjeta-contacto')) return

  const tarjeta = document.createElement('div')
  tarjeta.className = 'tarjeta-contacto'

  tarjeta.innerHTML = `
  <h3>Contacto</h3>
    <p>Email: ivantd@edfg.com</p>
    <p>Teléfono: +34 666666666</p>
    
    <button class="cerrar-contacto">Cerrar</button>

  `
  document.body.appendChild(tarjeta)

  tarjeta.querySelector('.cerrar-contacto').addEventListener('click', () => {
    tarjeta.remove()
  })
}
