import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import './components/NavBar/NavBar.css'

function LoginForm( props ){
  const [email, setEmail] = useState("jordan@test.com");
  const [password, setPassword] = useState("chicken");
  const [errors, setErrors] = useState("");
  let history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


//need to clean up, will send to page whatever response
//conditional, only if jwt present
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
        // console.log( res );
        if (res.data.jwt) {

          localStorage.setItem('token', res.data.jwt);
          localStorage.setItem('userId', res.data.user.id);
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.jwt}`;
          props.loginComplete( true );
          props.loginMessage( res.data.success )

          history.push('/profile')

        } else {

            setErrors(res.data.failure)
            // console.log(error)

        }
      })
      .catch( err => {
        console.warn( err );
      } );

      setEmail("")
      setPassword("")
      
      props.loginDisplay()
    }

    // <h1>LOGIN</h1>
    //
    // <label>Email:</label>
    // <label>Password:</label>

  return(
    <div>
      {
        (errors) && <p>{errors}</p>
      }
      <form id="login" onSubmit={handleSubmit}>
        <div id="login-inputs">

          <input value={email} onChange={handleEmailChange} type="text" placeholder="Your email address"/>


          <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password"/>
        </div>
        <br/>

        <button id="login-submit" type="submit">Login</button>
      </form>
    </div>
  )



}

export default LoginForm
