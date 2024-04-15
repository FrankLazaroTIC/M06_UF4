import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulari from './components/FormulariTasques'; 
import Llista from './components/LlistaTasques';
import Tasca from './components/Tasca';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Llista />
    </>
  )
}

export default App
