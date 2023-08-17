import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import './Styles/App.css'
import Header from './Components/Header/Header'
import './Styles/global.css'
import Footer from './Components/Footer/Footer'
import SearchBar from './Components/SearchBar'
import GamesDisplay from './Components/GamesDisplay'
import ProductoYMas from './Components/ProductoYMas'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <Header inicioVerde = {false} productosVerde = {false} balancesVerde = {false}/>
            <ProductoYMas/>
            <Footer/>
    </React.StrictMode>,
    )