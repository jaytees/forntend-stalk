import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function SignUp(){
  const [name, setName] = useState("Dave");
  const [username, setUsername] = useState("daveyBoi69");
  const [email, setEmail] = useState("dave@test.com");
  const [password, setPassword] = useState("chicken");
  const [passwordConf, setPasswordConf] = useState("chicken");
  const [errors, setErrors] = useState("");



  const handleNameChange = (event) => {
    setName(event.target.value)
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };
  const handlePasswordConfChange = (event) => {
    setPasswordConf(event.target.value)
  };

  

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post('http://localhost:3000/users', {
      name: name,
      username: username,
      email: email,
      password: password,
      password_confirmation: passwordConf,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })



  };

  return(
    <div className="signupForm">
      <h2>Sign up</h2>


      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name:</label>
          <br/>
          <input value={name} onChange={handleNameChange} type="text" placeholder="Name"/>
        </div>
        <br/>

        <div className="field">
          <label>Username:</label>
          <br/>
          <input value={username} onChange={handleUsernameChange} type="text" placeholder="Username"/>
        </div>
        <br/>

        <div className="field">
          <label>Email:</label>
          <br/>
          <input value={email} onChange={handleEmailChange} type="text" placeholder="email"/>
        </div>
        <br/>

        <div className="field">
          <label>Password:</label>
          <br/>
          <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password"/>
        </div>
        <br/>

        <div className="field">
          <label>Password:</label>
          <br/>
          <input value={passwordConf} onChange={handlePasswordConfChange} type="password" placeholder="Password Confirmation"/>
        </div>
        <br/>

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
export default SignUp
