import "./App.css";
import { RadioGroup, RadioOption } from "./components";
import { useState } from "react";

function App()
{
  const [selected, setSelected] = useState("")

  return(
    <div>
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertisements">Advertisements</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  )
}
 
export default App