import { useRef } from "react";
import "./App.css";


function App()
{
  const formInputRef = useRef(null)

  const focusInput = () =>
  {
    formInputRef.current.focus()
  }

  return(
    <div>
      <h1>Using useRef hook to access the underlying DOM</h1>
      <input type='text' ref={formInputRef}/>
      <button onClick={focusInput}>
        Focus input
      </button>
    </div>
  )
}

export default App