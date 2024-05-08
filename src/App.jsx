import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Hero from "./Components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    {count}
    <button onClick={() => setCount(count +1)}>+</button>
    <Card 
    image="https://i.pinimg.com/474x/0c/5a/2a/0c5a2afd4bdb78e2499d2b62f8ac9051.jpg"
    name="black panther"
    city="Jacmel"
    job="school"
    />

    <Card 
    image="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--46f84f92-3cda-444b-bb0e-605d50aa156f/_390575742906.app.png?preferwebp=true"
    name="cristiano ronaldo"
    city="santiago"
    job="soccer player"
    />


     


    </>
  )
}

export default App
