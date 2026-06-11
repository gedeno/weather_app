import { useState } from 'react'
import { Weather_data } from './weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Weather_data/>
    </>
  )
}

export default App
