import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Hero from ".components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    {count}
    <button onClick={() => setCount(count +1)}>+</button>
    <Card 
    image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.voanews.com%2Fa%2Fblack-panther%2F4256531.html&psig=AOvVaw14vbIhTQuQU1gTjt7_Kvts&ust=1715291444361000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDQoN-E_4UDFQAAAAAdAAAAABAE"
    name="black panther"
    city="Jacmel"
    job="school"
    />

    <Card 
    image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Fcristiano-ronaldo-paint-effect-artwork-xssod3kr0av45zvs.html&psig=AOvVaw3oc5w8vH1bPtnE52AEuwUU&ust=1715291691331000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDEkNOF_4UDFQAAAAAdAAAAABAE"
    name="cristiano ronaldo"
    city="santiago"
    job="soccer player"
    />


     


    </>
  )
}

export default App
