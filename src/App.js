import "./App.css";
import { useState } from "react";

function GoalForm(props)
{
  const [formData, setFormData] = useState({goal: "", by: ""})

  function changeHandler(e)
  {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function submitHandler(e)
  {
    e.preventDefault()
    props.onAdd(formData)
    setFormData({goal: "", by: ""})
  }

  return(
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler}/>
        <button type="submit">Submit Goal</button>
      </form>
    </>
  )
}

function ListOfGoals(props)
{
  return(
    <ul>
      {props.allGoals.map((g) =>
      {
        <li key={g.goal}>
          <p>My goal is to {g.goal}, by {g.by}</p>
        </li>
      })}
    </ul>
  )
}

function App()
{
  const [allGoals, setAllGoals] = useState([])

  function addGoal(goal)
  {
    setAllGoals([...allGoals, goal])
  }
  
  return(
    <div>
      <GoalForm onAdd={addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  )
}

export default App