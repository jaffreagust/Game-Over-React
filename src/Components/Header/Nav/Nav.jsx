import '../../../Styles/global.css'

function Nav(){
    return <div className="navbar">
                <a className="texto_headbar texto_verde" href="index.html" style={{textDecoration: "none"}}>Inicio</a>
                <a className="texto_headbar" href="productos.html" style={{textDecoration: "none"}}>Productos</a>
                <a className="texto_headbar" href="Balance.html" style={{textDecoration: "none"}}>Balances</a>
            </div>
}

export default Nav