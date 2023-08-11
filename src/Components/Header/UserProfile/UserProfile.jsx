import '../../../Styles/global.css'
import Carrito from '../../../Images/carrito.png'
import Perfil from '../../../Images/default_pfp.jpg'
function UserProfile(){
    return <div className="user_photo_cart">
                <div className="info_user">
                <div className="texto_headbar" style={{fontSize: "1.66vh"}}>Leonardo Duca</div>
                <div className="texto_headbar" style={{fontSize: "1.66vh"}}>Administrador</div>
                </div>
                <img src= {Perfil} className="profile_photo"/>
                <a href="carrito.html"><img src={Carrito} className="shopping_cart_icon"/></a>
            </div>
}

export default UserProfile