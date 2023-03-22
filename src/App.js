import "./App.css";
import { useState } from "react";
import PasswordErrorMessage from "./components/PasswordErrorMessage";

function App()
{
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState({
    value: "",
    isTouched: false
  })
  const [role, setRole] = useState("role")

  const isFormValid = () =>
  {
    return(
      fname && validateEmail(email) && password.value.length >= 8 && role != "role"
    )
  }

  const handleSubmit = () =>
  {
    e.preventDefault()
    alert("Account Created Successfully!")
    clearForm()
  }

  const clearForm = () =>
  {
    setFname("")
    setLname("")
    setEmail("")
    setPassword({
      value: "",
      isTouched: false
    })
    setRole("role")
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h1>Sign Up</h1>
          </legend>

          <div className="field">
            <label htmlFor="fname">First Name <sup>*</sup></label>
            <br/>
            <input type='text' placeholder="First Name" id="fname" name="fname" value={fname} onChange={e => setFname(e.target.value)}/>
          </div>

          <div className="field">
            <label htmlFor="lname">Last Name</label>
            <br/>
            <input type='text' placeholder="Last Name" id="lname" name="lname" value={lname} onChange={e => setLname(e.target.value)}/>
          </div>

          <div className="field">
            <label htmlFor="email">Email address <sup>*</sup></label>
            <br/>
            <input
            type='email'
            placeholder="Email address"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
          </div>

          <div className="field">
            <label htmlFor="password">Password <sup>*</sup></label>
            <br/>
            <input
            type='password'
            placeholder="Password"
            id="password"
            name="password"
            value={password.value}
            onChange={e => setPassword(...password, value: e.target.value)}
            onBlur={() => setPassword(...password, isTouched: true)}/>
            <br/>
            {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage/>) : null}
          </div>  

          <div className="field">
            <label>Role <sup>*</sup></label>
            <br/>
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="indivisual">Indivisual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" disabled={!isFormValid()}>Create Account</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App;