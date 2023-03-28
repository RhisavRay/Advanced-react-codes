import "./App.css";
import { useReducer } from "react";

function App()
{
  const reduce = (wallet, action) =>
  {
    if(action.type === "buy") return {money: wallet.money - 10}
    if(action.type === "sell") return {money: wallet.money + 10}
    if(action.type === "celebrity") return {money: wallet.money + 5000}
  }

  const [wallet, setWallet] = useReducer(reduce, {money: 100})

  return(
    <div>
      <h1>Wallet: {wallet.money}</h1>
      <div>
        <button onClick={() => setWallet({type: "buy"})}>
          Buy ingredients
        </button>
        <button onClick={() => setWallet({type: "sell"})}>
          Sell a meal
        </button>
        <button onClick={() => setWallet({type: "celebrity"})}>
          Celebrity visit
        </button>
      </div>
    </div>
  )
}

export default App