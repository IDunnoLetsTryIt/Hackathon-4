import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Artist from './Artist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Artist/>
    </div>
  )
}

export default App
