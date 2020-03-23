import React, {useState, useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import './SignUp.css'

function SignUp( props ){
  const [user, setUser] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: '',
      username: '',
      location: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  );
  const history = useHistory();
  const [errors, setErrors] = useState([]);



  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    setUser({[name]: newValue});

  }

  const resetState = (user) => {

    Object.keys(user).map(key => user[key] = '')

  }



  const handleSubmit = (event) => {
    event.preventDefault();

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }

    console.log('url', url);
    axios.post(`${url}/users`, {
      user,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then( res => {
      // console.log(res);
      if (res.data.jwt) {

        localStorage.setItem('token', res.data.jwt);
        localStorage.setItem('userId', res.data.user.id);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.jwt}`;
        props.messageCreator( true, res.data.user.name );

        history.push('/profile')

        setUser(resetState(user))

      } else {

        setErrors(res.data.errors)

      }
    })
    .catch( (err) => {
      // console.warn('catch', err.response.data.errors);
      // displayErrors(err.response.data.errors)
      setErrors(err.response.data.errors)
    })

  };

  return(
    <div className="formContainer">
      <h2 className="formTitle">Sign up</h2>
      {
        (errors) && <div id="signup-errors">
          <ul>
            {errors.map(error =>
              <li>{error}</li>
            )}
          </ul>
        </div>
      }

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name:</label>
          <br/>
          <input value={user.name} onChange={handleChange} type="text" name="name" placeholder="name"/>
        </div>
        <br/>

      <div className="field">
          <label>Username:</label>
          <br/>
          <input value={user.username} onChange={handleChange} type="text" name="username" placeholder="username"/>
        </div>
        <br/>

        <div className="field">
          <label>Location:</label>
          <br/>
          <input value={user.location} onChange={handleChange} type="text" name="location" placeholder="location"/>
        </div>
        <br/>

        <div className="field">
          <label>Email:</label>
          <br/>
          <input value={user.email} onChange={handleChange} type="text" name="email" placeholder="email"/>
        </div>
        <br/>

        <div className="field">
          <label>Password:</label>
          <br/>
          <input value={user.password} onChange={handleChange} type="password" name="password" placeholder="password"/>
        </div>
        <br/>

        <div className="field">
          <label>Password Confirmation:</label>
          <br/>
          <input value={user.password_confirmation} onChange={handleChange} type="password" name="password_confirmation" placeholder="password confirmation"/>
        </div>
        <br/>

        <button className="formButton" type="submit">Submit</button>
      </form>

    </div>
  )
}
export default SignUp
