import '../../Styles/global.css'
import Brand from './Brand/Brand'
import  Nav  from './Nav/Nav'
import  UserProfile  from './UserProfile/UserProfile'

function Header(){
    return <><div className="headbar">
                <Brand></Brand>
                <UserProfile></UserProfile>
            </div><Nav></Nav></>
}

export default Header