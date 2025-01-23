import React from 'react'
import Nav from './Components/Nav'
import "./index.css"
import Landing from './Components/Landing'
import Swiper from './Components/Swiper'
import Form from './Components/Form'

function App() {
  return (
    <>
    <main>
    <Nav/>
    <Landing/>
    </main>
      <Swiper/>
      <Form/>
    </>
  )
}

export default App
