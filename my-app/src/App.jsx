import { useState } from 'react'
import Nav from './Components/Nav'
import "./index.css"
import Landing from './Components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <Nav/>
    <Landing/>
    </main>
    </>
  )
}

export default App
