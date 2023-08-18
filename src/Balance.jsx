//import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/balance.css'
import Balance from './Components/BalanceComp'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
        <Header inicioVerde = {false} productosVerde = {false} balancesVerde = {true}/>
        <Balance/> 
        <Footer/>
    </React.StrictMode>,
    )