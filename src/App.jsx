import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'
import './Styles/global.css'
import TopSellers from './Components/TopSellers/TopSellers'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <TopSellers></TopSellers>
      <Footer></Footer>
    </>
  )
}

export default App
