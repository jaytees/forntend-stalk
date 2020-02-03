import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function LoginForm(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // console.log(email);
    // console.log(password);
    // console.log(event);


      axios.post( 'http://localhost:3000/login', {
        email: email,
        password: password,
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        }
      })
      .then( res => {
        console.log( res );

        localStorage.setItem('token', res.data.jwt);
        localStorage.setItem('userId', res.data.user.id);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.jwt}`;

        history.push('/profile')
      })
      .catch( err => {
        console.warn( err );
      } );

      setEmail("")
      setPassword("")
    }


  return(
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Email:</label>
          <input value={email} onChange={handleEmailChange} type="text" placeholder="email"/>
        </div>
        <div className="field">
          <label>Password:</label>
          <input value={password} onChange={handlePasswordChange} type="text" placeholder="password"/>
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  )



}

export default LoginForm
