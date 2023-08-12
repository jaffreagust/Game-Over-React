import '../Styles/productos.css'

function GameBox(props) {
  return (
    <div className="caja_juego" key={props.index}>
        <img src={props.imagen}/>
        <div className="caja_texto_juego">
          <div className="texto_juego">{props.nombre}</div>
          <div className="texto_juego">$ {props.precio}</div>
        </div>
      </div>
  )
}

export default GameBox