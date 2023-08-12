import '../Styles/productos.css'
import FlechaAbajo from '../Images/flecha_abajo.png'
import Lupa from '../Images/lupa.png'

function SearchBar() {
  return (
    <div className="titulo_searchbar">
      <div className="texto_titulo_productos">Productos</div>
      <div className="barra_busqueda">
      <a className="ordenar" href="#"><img src={FlechaAbajo} style={{height: "1vh", width: "1vh", marginRight: "1%"}}/>Mas caro</a>
      <input className="busqueda" id="buscar" onChange={(e)=>setBusqueda(e.target.value)} type="search" placeholder="Buscar" aria-label="Search"/>
      <a className="lupa" id="buscar" href="#"><img src={Lupa} style={{height: "60%", width: "60%"}}/></a>
      </div>
    </div>
  )
}

export default SearchBar