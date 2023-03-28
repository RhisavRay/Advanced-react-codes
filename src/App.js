import "./App.css";
import { useState, useEffect } from "react";

function App()
{
  const [user, setUser] = useState([])

  const fetchData = () =>
  {
    fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    .then((data) => setUser(data))
  }

  useEffect(() =>
  {
    fetchData()
  }, [user])

  return Object.keys(user).length > 0 ? (
    <div style={{padding: '40px'}}>
      <h1>Customer Data:</h1>
      <h2>Name: {user.result[0].name.first}</h2>
      <img src={user.result[0].picture.large} alt=""/>
    </div>
  ) : (
    <h1>Data pending...</h1>

  )
}

export default App