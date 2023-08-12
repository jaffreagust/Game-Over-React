import '../Styles/productos.css'
import './GameBox.jsx'
import {useState, useEffect} from 'react'
import gameList from '../../productos.json'
import GameBox from './GameBox.jsx'
import FlechaAbajo from '../Images/flecha_abajo.png'
import Lupa from '../Images/lupa.png'
import RocketLeague from '../Images/Rocket_League.png'


export default function GamesDisplay() {
  console.log(gameList)

  const [GameList, setGameList] = useState([])
  const [Busqueda, setBusqueda] = useState([])

  useEffect(() =>{
    if(Busqueda.length === 0){
        setGameList(gameList)
    }
    else{
        setGameList(gameList.filter((game)=>(game.nombre.toLowerCase().includes(Busqueda.toLowerCase()))))
    }
  }, [Busqueda])

  if(GameList.length === 0){
    return (
        <div>
            <div className="titulo_searchbar">
                <div className="texto_titulo_productos">Productos</div>
                <div className="barra_busqueda">
                <a className="ordenar" href="#"><img src={FlechaAbajo} style={{height: "1vh", width: "1vh", marginRight: "1%"}}/>Mas caro</a>
                <input className="busqueda" id="buscar" onChange={(e)=>setBusqueda(e.target.value)} type="search" placeholder="Buscar" aria-label="Search"/>
                <a className="lupa" id="buscar" href="#"><img src={Lupa} style={{height: "60%", width: "60%"}}/></a>
                </div>
            </div>
            <h1 style={{color: "White", margin: "0 auto"}}>No se encontraron juegos</h1>
        </div>
    )
  }

  return (
    <div>
        <div className="titulo_searchbar">
            <div className="texto_titulo_productos">Productos</div>
            <div className="barra_busqueda">
            <a className="ordenar" href="#"><img src={FlechaAbajo} style={{height: "1vh", width: "1vh", marginRight: "1%"}}/>Mas caro</a>
            <input className="busqueda" id="buscar" onChange={(e)=>setBusqueda(e.target.value)} type="search" placeholder="Buscar" aria-label="Search"/>
            <a className="lupa" id="buscar" href="#"><img src={Lupa} style={{height: "60%", width: "60%"}}/></a>
            </div>
        </div>
    
        <div className='caja_productos main'>
            {GameList.map((game) => (
                <GameBox nombre={game.nombre} precio={game.precio} imagen={game.imagen} index={game.index}/>
            ))}
        </div>
    </div>
  )
}
