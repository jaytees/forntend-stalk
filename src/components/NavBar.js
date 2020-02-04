import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import LoginForm from './../LoginForm';
import LogOut from './../LogOut';
import SignUp from './../SignUp';

function NavBar( props ){
  const [welcomeMessage, setWelcomeMessage] = useState('Please login or sign up');

  console.log(props.setTokenHeader);
  console.log(props.tokenHeaderValue);

  return(
    <div className="navbar">
        <p>{welcomeMessage}</p>
        {
          (props.tokenHeaderValue) ?
          <LogOut logOutComplete={ props.setTokenHeader } logOutSuccess={setWelcomeMessage}/> :
          <div>
            <LoginForm loginComplete={ props.setTokenHeader } loginSuccess={setWelcomeMessage} />

            <SignUp signUpComplete={ props.setTokenHeader } />
          </div>
          }
      </div>
  )
}

export default NavBar
