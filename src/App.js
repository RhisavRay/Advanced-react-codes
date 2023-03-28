import "./App.css";
import { useState, useEffect } from "react";

function App()
{
  const [toggle, setToggle] = useState(false)

  function clickHandler()
  {
    setToggle(!toggle)
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }, [toggle])

  return(
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {
        toggle && <h2>Welcome to Little Lemon</h2>
      }
    </div>
  )
}

export default App