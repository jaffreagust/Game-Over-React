import '../../Styles/global.css'
import '../../Styles/index.css'
import {useState, useEffect} from 'react'
import GameBox from '../GameBox'
import gameList from '../../../topsellers.json'
import residentEvil from '../../Images/resident_evil_village.avif'
import gothamKnights from '../../Images/gotham_knights.jpeg'
import fifa23 from '../../Images/fifa23.png'
import hitmanIII from '../../Images/hitman_III.jpeg'


export function GamesTopSell(props) {
  return (
    
    <a className="gamebox" key={props.index} href={'../../producto.html?imagen=' + props.imagen + '&nombre=' + props.nombre + '&precio=' + props.precio + '&descripcion=' + props.descripcion + '&devs=' + props.devs}>
        <img src={props.imagen}/>
        <div className="gamebox_text">
          {props.nombre}
        </div>
          <div className="gamebox_price">$ {props.precio}
        </div>
      </a>
  )
}



function TopSellers(){
  const [GameList, setGameList] = useState([])
  useEffect(() =>{
    setGameList(gameList)
  })
    return<> <div className="texto_normal center" style={{textShadow:"0px 0px 15px #000000",   marginBottom: "4vh"}}>
            Más vendidos
            </div>

  <div className="mas_vendidos main">
    {GameList.map((game) => (
      <GamesTopSell nombre={game.nombre} precio={game.precio} imagen={game.imagen} index={game.index} descripcion={game.descripcion} devs={game.devs}/>
    ))}
  </div>
  </>
}

export default TopSellers