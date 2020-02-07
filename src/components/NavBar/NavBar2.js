import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import LoginForm from './../../LoginForm';
import LogOut from './../../LogOut';

import './NavBar2.css'


function NavBar2( props ){
  const [loginFormDisplayed, setLoginFormDisplayed] = useState(false)

  const displayLogin = () => {

    (!loginFormDisplayed) ? setLoginFormDisplayed(true) : setLoginFormDisplayed(false)

  }





  return(
    <div className="header">

        <div id="nav-links">

        </div>

        <div id="logo-div">

            <h1 onClick={() => console.log(`hello`)} id="logo"><Link id='logo' to='/users'>Stalk</Link></h1>

        </div>

    </div>
  )
}

export default NavBar2
