import "./App.css";
import { useState } from "react";

function App()
{
  const [name, setName] = useState('')

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    console.log(`Form was submtted successfully! Welcome ${name}`)
    setName('')
  }

  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Forms with React.js</legend>
          <div className="Field">
            <label htmlFor="name">Name: </label>
            <input id="name" type='text' placeholder="Name..." name="name" value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App;