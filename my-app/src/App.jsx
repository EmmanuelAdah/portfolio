import { useState } from 'react'
import Nav from './Components/Nav'
import "./index.css"
import Landing from './Components/Landing'
import Swiper from './Components/Swiper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <Nav/>
    <Landing/>
    </main>
    <swiperSlide>
      <Swiper/>
    </swiperSlide>
    </>
  )
}

export default App
