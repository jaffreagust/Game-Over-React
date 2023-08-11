import '../../Styles/global.css'
import '../../Styles/home.css'
import residentEvil from '../../Images/resident_evil_village.avif'
import gothamKnights from '../../Images/gotham_knights.jpeg'
import fifa23 from '../../Images/fifa23.png'
import hitmanIII from '../../Images/hitman_III.jpeg'
function TopSellers(){
    return<> <div className="texto_normal center" style={{textShadow:"0px 0px 15px #000000",   marginBottom: "4vh"}}>
            Más vendidos
            </div>

  <div className="mas_vendidos main">
    <div className="gamebox">
      <img src={residentEvil}/>
      <div className="gamebox_text">
        Resident Evil Village
      </div>
      <div className="gamebox_price">
        $39
      </div>
    </div>

    <div className="gamebox">
      <img src={gothamKnights}/>
      <div className="gamebox_text">
        Gotham Knights
      </div>
      <div className="gamebox_price">
        $69
      </div>
    </div>

    <div className="gamebox">
      <img src={fifa23}/>
      <div className="gamebox_text">
        FIFA 23
      </div>
      <div className="gamebox_price">
        $59
      </div>
    </div>

    <div className="gamebox">
      <img src={hitmanIII}/>
      <div className="gamebox_text">
        HITMAN III
      </div>
      <div className="gamebox_price">
        $29
      </div>
    </div>
  </div>
  </>
}

export default TopSellers