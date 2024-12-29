import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        {count}
        </button>
        <p>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more AHORA SI CREO
        OLA ssdasdaaaa
        AMIGO PQ NO FUNCIONA BIEn
        pls funciona
      </p>
    </>
  )
}

export default App
