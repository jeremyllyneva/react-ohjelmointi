import { useState } from 'react'
import './App.css'

// Button komponentti, joka on tarkoitettu napeille
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const plusOne = () => setCounter(counter + 1)
  const minusOne = () => setCounter(counter - 1)

  return (
    <div className="container">
      <div className="counter">{counter}</div>
      <Button handleClick={plusOne} text='Lisää'/>
      <Button handleClick={minusOne} text='Vähennä'/>
    </div>
  )
}

export default App
