import '../../Styles/global.css'
import Brand from './Brand/Brand'
import  Nav  from './Nav/Nav'
import  UserProfile  from './UserProfile/UserProfile'

function Header(props){
    return <><div className="headbar">
                <Brand></Brand>
                <UserProfile></UserProfile>
            </div><Nav inicioVerde = {props.inicioVerde} productosVerde = {props.productosVerde} balancesVerde = {props.balancesVerde}></Nav></>
}

export default Header