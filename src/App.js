import "./App.css";
import { useState } from "react";

function App()
{
  const [score, setScore] = useState("10")
  const [comment, setComment] = useState("")

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    console.log(`Thank you for your feedback. You have given us a score of ${score}⭐!`)
    setScore("10")
    setComment("")
  }

  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Feedback Form form Little Lemon</legend>
          <div className="Field">
            <label>Rate the food</label>
            <br></br>
            <input type='range' min='1' max='10' value={score} onChange={e => setScore(e.target.value)}/>
            <label>{score}⭐</label>
          </div>
          <div className="Field">
            <label htmlFor="comment">Additional comments</label>
            <br></br>
            <textarea id="comment" placeholder="Comments please..." value={comment} onChange={e => setComment(e.target.value)}/>
          </div>
          <button disabled={!comment} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App;