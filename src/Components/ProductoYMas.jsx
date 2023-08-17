import '../Styles/global.css'
import '../Styles/productos.css'
import '../Styles/producto.css'
import residentEvil from '../Images/resident_evil_village.avif'
import witcher3 from '../Images/the_witcher_3.jpeg'
import gow from '../Images/gow_ragnarok.jpeg'
import fifa23 from '../Images/fifa23.png'
import cod from '../Images/modern_warfare_2.png'
import carrito from '../Images/carritoverde.png'

function ProductoYMas (){
    return    <div className="producto_y_relacionado main">

        <div className="producto_grande">
            <img src={cod}/>
            <div className="datos_productogrande">
            <div className="precio_productogrande">$69</div>
            <div className="nombre_productogrande">Modern Warfare II</div>
            <div className="descripcion_productogrande">Modern Warfare II trae un juego de última generación para los fanáticos con un manejo de armas completamente nuevo, una nueva armería y otras innovaciones gráficas y de juego que disparan la franquicia a nuevas alturas.</div>
            <div className="desarrolladora_productogrande">Activision</div>
            <div className="btn_carritoproductogrande">
                <div style={{fontSize: "2.5vh",color: "white",alignSelf:"center",textShadow: "#03B384 1px 0 15px",fontWeight: "bolder"}}>+</div>
                <div className="carritoverde"><img src={carrito} style={{width: "4.5vh",height: "auto", filter:"dropShadow(1px 0 5px #03B384)"}}/></div>
            </div>
            </div>
            
        </div>

        <div className="juegos_relacionados">
                <div className="texto_titulo_productos right-align" style={{fontFamily: 'Inconsolata',display: "flex",alignSelf: "center"}}>Juegos Relacionados</div>
                <div className="caja_productos" style={{marginLeft: "0"}}>
                <div className="caja_juego">
                    <img src={residentEvil}/>
                    <div className="caja_texto_juego">
                    <div className="texto_juego">Resident Evil Village</div>
                    <div className="texto_juego">$ 39</div>
                    </div>
                </div>

                <div className="caja_juego">
                    <img src={witcher3}/>
                    <div className="caja_texto_juego">
                    <div className="texto_juego">The Witcher 3</div>
                    <div className="texto_juego">$ 39</div>
                    </div>
                </div>

                <div className="caja_juego">
                    <img src={gow}/>
                    <div className="caja_texto_juego">
                    <div className="texto_juego">God Of War Ragnarok</div>
                    <div className="texto_juego">$ 60</div>
                    </div>
                </div>

                <div className="caja_juego">
                    <img src={fifa23}/>
                    <div className="caja_texto_juego">
                    <div className="texto_juego">FIFA 23</div>
                    <div className="texto_juego">$ 59</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
}
export default ProductoYMas