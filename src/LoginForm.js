import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

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
          props.loginSuccess( res.data.success )

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
      props.loginSuccess( 'Please login or sign up' )
    }


  return(
    <div>
      <h1>LOGIN</h1>
      {
        (errors) && <p>{errors}</p>
      }
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Email:</label>
          <input value={email} onChange={handleEmailChange} type="text" placeholder="email"/>
        </div>
        <div className="field">
          <label>Password:</label>
          <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
        </div>
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )



}

export default LoginForm
