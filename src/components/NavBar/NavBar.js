import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './../../LoginForm';
import LogOut from './../../LogOut';

import './NavBar.css'


function NavBar( props ){
  const [loginFormDisplayed, setLoginFormDisplayed] = useState(false)

  const displayLogin = () => {
    (!loginFormDisplayed) ? setLoginFormDisplayed(true) : setLoginFormDisplayed(false)
  }


  return(
    <div id="nav-div">
      <nav id="navbar">


          <p>{props.navMessage}</p>

          <div id="navbar-logo">
            <h1 id="logo">Stalk</h1>
          </div>

          {
            (props.tokenHeaderValue)
            ?
            <LogOut logOutMessage={props.messageCreator} />
            :

            <div id="nav-login-operations">

              <p id="login-trigger" href="#" onClick={displayLogin}>Log In</p>

            {
              (loginFormDisplayed) &&

                <div id="login-content">
                    <LoginForm loginMessage={props.messageCreator}
                    loginDisplay={displayLogin}/>
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
