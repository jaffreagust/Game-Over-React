import '../Styles/productos.css'

function GameBox(props) {
  return (
    <a className="caja_juego" key={props.index} href='../../producto.html'>
        <img src={props.imagen}/>
        <div className="caja_texto_juego">
          <div className="texto_juego">{props.nombre}</div>
          <div className="texto_juego">$ {props.precio}</div>
        </div>
      </a>
  )
}

export default GameBox
