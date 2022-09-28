import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <p className={`text-white bg-violet-400`}>
              This is a template Vite + React + Tailwind
          </p>
      </div>
  )
}

export default App
