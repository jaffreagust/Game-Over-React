import '../../../Styles/global.css'

function Nav(props){
    return <div className="navbar">
                <a className={props.inicioVerde ? "texto_headbar texto_verde" : "texto_headbar"} href="index.html" style={{textDecoration: "none"}}>Inicio</a>
                <a className={props.productosVerde ? "texto_headbar texto_verde" : "texto_headbar"} href="productos.html" style={{textDecoration: "none"}}>Productos</a>
                <a className={props.balancesVerde ? "texto_headbar texto_verde": "texto_headbar"} style={{textDecoration: "none"}}>Balances</a>
            </div>
}

export default Nav