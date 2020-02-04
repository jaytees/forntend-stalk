import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import LoginForm from './../../LoginForm';
import LogOut from './../../LogOut';

import './NavBar.css'


function NavBar( props ){
  const [welcomeMessage, setWelcomeMessage] = useState('Please login or sign up');
  const [loginFormDisplayed, setLoginFormDisplayed] = useState(false)

  const displayLogin = () => {

    (!loginFormDisplayed) ? setLoginFormDisplayed(true) : setLoginFormDisplayed(false)

  }


  return(
    <div>
      <nav id="navbar">

          <p>{welcomeMessage}</p>

          <div>
              <h1>Stalk App</h1>
          </div>
          {
            (props.tokenHeaderValue)
            ?
            <LogOut logOutComplete={ props.setTokenHeader } logOutSuccess={setWelcomeMessage} />
            :

            <div id="nav-login-operations">

              <a id="login-trigger" href="#" onClick={displayLogin}>Log In</a>

            {
              (loginFormDisplayed) &&

                <div id="login-content">
                    <LoginForm loginComplete={ props.setTokenHeader } loginSuccess={setWelcomeMessage} />
                </div>

              }


              <Link to='/signup' id="signup-link">Sign Up</Link>

            </div>
          }
        </nav>
      </div>
  )
}

export default NavBar
